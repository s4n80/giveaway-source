const config = require(`../config/bot.js`)

module.exports = {

    start: {
      perms: ":warning: You need the `manage messages` permission to use this command or the :",
      channel: ":warning: Please enter a text `#channel` to start the giveaway.",
      duration: ":warning: Please indicate the duration of the giveaway. Arguments available `s` for seconds, `m` for minutes, `h` hourly and `d` for the days. Example `10m`.",
      argswinners: ":warning: Please indicate the number of winners. Example `1` for one winner or `2` for two winners.",
      prize: ":warning: Please indicate the prize to be won. Example `a nitro`.",
      good: ":tada: I launched the giveaway in the living room :",

      giveaway: "**GIVEAWAY** 🎁",
      giveawayEnded: "**GIVEAWAY FINISHED** 🎁",

      timeRemaining: "Remaining time : **{duration}** !", 
      inviteToParticipate: (message) => `Click on ${config.reaction} to participate !`,
      winMessage: (message) => `${config.reaction} Congratulations, {winners} ! Prize : **{prize}** !`,
      embedFooter: "Giveaway",
      noWinner: "Giveaway cancelled, not enough participants.",
      hostedBy: "By : {user}",
      winners: "winner(s)",
      endedAt: "Finished",
    },
  
    units: {
      seconds: "second(s)",
      minutes: "minute(s)",
      hours: "hour(s)",
      days: "day(s)",
    },

    help: {
      title: "Giveaway Commands",
      description: "These are the Giveaway commands of The Emperor Bot.",

      start: (message) => `**${config.prefix}start**`,
      startdescription: (message) => `This command is used to launch a giveaway.\nUsage \`${config.prefix}start <#channel> <time> <winners> <Prize>\`.`,

      end: (message) => `**${config.prefix}end**`,
      enddescription: (message) => `This command is used to delete a giveaway.\nUsage \`${config.prefix}end <ID giveaway>\`.`,

      reroll: (message) => `**${config.prefix}reroll**`,
      rerolldescription: (message) => `This command is used to restart a giveaway.\nUsage \`${config.prefix}reroll <ID giveaway>\`.`,

      edit: (message) => `**${config.prefix}edit**`,
      editdescription: (message) => `This command is used to modify a giveaway.\nUsage \`${config.prefix}edit <ID giveaway> <winners> <new Prize>\`.`,

      config: (message) => `**${config.prefix}set**`,
      configdescription: (message) => "This command is used to modify the bot's configurations.\n`Usage e!gconfig <mention/logs/role>`\n details:\n **Mention** - mentions the bot want to use during giveaway.\n **logs** - logs for Giveaways \n **Role** - Role who dont have manage messages permission but can host giveaways.",
    },

    end: {
      perms: ":warning: You need the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      err: ":warning: I couldn't find anything for this giveaway :",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?",
      good: ":hourglass_flowing_sand: I'm ending this contest in :"
    },

    reroll: {
      perms: ":warning: You need the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      err: ":warning: I couldn't find anything for this giveaway :",
      good: ":tada: New winner(s) : {winners} ! Congratulations !",
      parts: ":warning: There weren't enough participants for this giveaway i can't choose."
    },

    edit: {
      perms: ":warning: You need the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      argswinners: ":warning: Please indicate the number of winners. Example `1` for one winner or `2` for two winners.",
      prize: ":warning: Please indicate the prize to be won. Example `a nitro`.",
      err: ":warning: I couldn't find anything for this giveaway :",
      good: ":tada: I'm in the process of modifying the giveaway with the new parameters. The changes will take effect in 5 seconds.",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?"
    },
      delete: {
      perms: ":warning: You need the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      err: ":warning: I couldn't find anything for this giveaway :",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?",
      good: ":hourglass_flowing_sand: I'm deleting this contest in :"
    },

    lang: {
      perms: ":warning: You need the `manage messages` permission to use this command.",
      msg: ":warning: Please indicate a language to be defined `fr` french and `en` english.",
      err: ":warning: The chosen language is already the one active on this server. Try another one to see ?"
    },

    invite: {
      title: "Invite me",
      text: "How can you invite me ?",
      description: "If you want to invite me on your server just click",
      text2: "Join my server",
      server: "If you want to join my server just click",
      clickhere: "here"
    }
};
