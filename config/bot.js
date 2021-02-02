module.exports = {

  idbot: "733643084155322408", //Bot ID - change into your bot ID

    prefix: "g!", //Bot prefix - change into your bot prefix

    basiclang: "en", //The basic language of the bot "en" for English - only en is available lol

    embeds: {
        color: "#00ceff", //Embed color (in English)
        footers: "made by ClashEmperorᵈᵉᵛ#7777" //Embed footer
    },

    start: {
        loading: "loading...", //Loading status
        activity: "g!help | i'm here for giveaways!" //Status
    },

    events: {
        addcolor: "GREEN", //The color of the event add (in English)
        remcolor: "RED" //The color of the event remove (in English)
    },

    reaction: "🎉", //Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord

    grole: "Giveaways", //If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here

    auth: {
        support: "https://discord.gg/E8P3C64", //The link of your Discord server
        dperms: "8" //The permissions that the bot asks on we want to add it on a Discord server (8 = moderator)
    },
};
