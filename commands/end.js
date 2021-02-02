const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const db = require('quick.db')
    
    const config = require(`../config/bot.js`)

    let language = db.fetch(`lang_${message.guild.id}`)

    if (language === null) language = config.basiclang

    const lang = require(`../lang/${language}.js`)

  let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");

  if (hasPerm === false) {
    return message.channel.send(lang.end.perms)
  
  }
  if (!args[0]) {

      message.channel.send(lang.end.msg);
    
  }
  let messageID = args[0];
  try {
    client.giveawaysManager
      .edit(messageID, {
        setEndTimestamp: Date.now()
      })
      .then(() => {
          message.channel.send(lang.end.good);
      
      });
  } catch (e) {
    console.log(e);
      message.channel.send(lang.end.err);
  }
};

