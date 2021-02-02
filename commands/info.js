const Discord = require("discord.js");

exports.run = async (client, message) => {
  let allGiveaways = client.giveawaysManager.giveaways;
  let shard = client.ws.shards.size;
  let notEnded = client.giveawaysManager.giveaways.filter(g => !g.ended);
  let ended = client.giveawaysManager.giveaways.filter(g => g.ended);
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#FF0000")
      .addField("Owner  :", "KTL ・ SAN#5772 ")
      .addField("Developer :", "KTL・GURGA#1114")
      .addField("Prefix", "g!", true)
      .addField("Shards", `${shard}`, true)
      .addField("Servers :  ", `${client.guilds.cache.size}`, true)
      .setDescription(`All giveaways: **${allGiveaways.length}**\nGoing on: **${notEnded.length}**\nEnded: **${ended.length}**
[Support Server](https://discord.gg/BB2qMt4)
[Invite Me](https://discord.com/oauth2/authorize?client_id=795367729284644944&permissions=268957760&scope=bot)
[Vote Me](https://top.gg/bot/795367729284644944/vote)`)
  );
};
