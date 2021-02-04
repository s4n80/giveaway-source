const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args, lang) => {
    let version = require("../../package.json").version;
    let discord_giveaways = require("../../package.json").dependencies["discord-giveaways"];
    let supportURL = client.config.support;
    let website = `https://giveawayybot.glitch.me/`
    let invite = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`;
    message.channel.send(new MessageEmbed()
        .setTitle(lang.stats.title)
        .setDescription(lang.stats.info)
        .addField(lang.stats.stats, lang.stats.stat + message.client.guilds.cache.size + `\n` + lang.stats.set + message.client.users.cache.size + `\n` + lang.stats.ch + message.client.channels.cache.size)
        .addField(lang.stats.ver, `\`Discord.js :\` v${Discord.version}\n\`Nodejs :\` v${process.versions.node}\n\`Discord-giveaways :\` v${discord_giveaways}\n\`PowerGift's :\` v${version}`)
        .addField(lang.stats.ram, `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\``)
        .addField(lang.stats.moreinfo, lang.stats.comd + message.client.commands.size + `\n` + lang.stats.giv + client.giveawaysManager.giveaways.length)
        .addField(lang.help.link, `[Support server](${supportURL}) | [Invite](${invite}) |  [Website](${website}) `)
        .setColor("RED"))
}
