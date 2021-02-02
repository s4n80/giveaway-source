const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#ff0000")
      .addField(
        "Invite Link:",
        "[Click Here!](https://discord.com/oauth2/authorize?client_id=795367729284644944&permissions=268957760&scope=bot)"
      )
      .addField("Support Link:", "[Click Here!](https://discord.gg/BB2qMt4)")
      .addField(
        "Vote Link:",
        "[Click Here!](https://top.gg/bot/795367729284644944/vote) "
      )
  );
};

module.exports.help = {
  name: "invite"
};