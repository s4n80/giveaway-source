const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const db = require("quick.db");

  const config = require(`../config/bot.js`);

  let language = db.fetch(`lang_${message.guild.id}`);

  if (language === null) language = config.basiclang;

  const lang = require(`../lang/${language}.js`);
  let role = db.fetch(`role_${message.guild.id}`);

  if (role === null) role = config.grole;

  let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");
  if (hasPerm === false) {
    return message.channel.send(
      message.channel.send(lang.delete.perms + "** **" + "`" + role + "`" + ".")
    );
  }
  if (!args[0]) {
    message.channel.send(
      lang.delete.msg + "** **" + "`" + args.join(" ") + "`" + "."
    );
  }
  let messageID = args[0];
  client.giveawaysManager
    .delete(messageID)
    .then(() => {
      message.channel.send(lang.delete.good);
    })
    .catch(err => {

      
        message.channel.send(lang.delete.err);
      
    });
};
