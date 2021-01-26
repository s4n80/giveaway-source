const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-1-20.glitch.me/`);
}, 280000);

// 50 token dane
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const MARS = new Discord.Client();
const MARS2 = new Discord.Client();
const MARS3 = new Discord.Client();
const MARS4 = new Discord.Client();
const MARS5 = new Discord.Client();
const MARS6 = new Discord.Client();
const MARS7 = new Discord.Client();
const MARS8 = new Discord.Client();
const MARS9 = new Discord.Client();
const MARS10 = new Discord.Client();
const MARS11 = new Discord.Client();
const MARS12 = new Discord.Client();
const MARS13 = new Discord.Client();
const MARS14 = new Discord.Client();
const MARS15 = new Discord.Client();
const MARS16 = new Discord.Client();
const MARS17 = new Discord.Client();
const MARS18 = new Discord.Client();
const MARS19 = new Discord.Client();
const MARS20 = new Discord.Client();
const MARS21 = new Discord.Client();
const MARS22 = new Discord.Client();
const MARS23 = new Discord.Client();
const MARS24 = new Discord.Client();
const MARS25 = new Discord.Client();
const MARS26 = new Discord.Client();
const MARS27 = new Discord.Client();
const MARS28 = new Discord.Client();
const MARS29 = new Discord.Client();
const MARS30 = new Discord.Client();
const MARS31 = new Discord.Client();
const MARS32 = new Discord.Client();
const MARS33 = new Discord.Client();
const MARS34 = new Discord.Client();
const MARS35 = new Discord.Client();
const MARS36 = new Discord.Client();
const MARS37 = new Discord.Client();
const MARS38 = new Discord.Client();
const MARS39 = new Discord.Client();
const MARS40 = new Discord.Client();
const MARS41 = new Discord.Client();
const MARS42 = new Discord.Client();
const MARS43 = new Discord.Client();
const MARS44 = new Discord.Client();
const MARS45 = new Discord.Client();
const MARS46 = new Discord.Client();
const MARS47 = new Discord.Client();
const MARS48 = new Discord.Client();
const MARS49 = new Discord.Client();
const MARS50 = new Discord.Client();

const help = `**
    Devsan
**`;
// IRAQxSTAFF

const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\`  \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
MARS.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
      //
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE",
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "mars"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
});

MARS.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return;
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE";
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
});

// ======= [ settings JSON - END   ] ======== //

// ======= [ Reload JSON   ] ======== //
MARS.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
// ======= [ Reload JSON - END   ] ======== //

// عیسابی ئەکاونتەکان  50 تۆکین
// ======= [ Console LOG    ] ======== //
MARS.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 1`);
  console.log(`Hi ${MARS.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS.guilds.size} " ]`);
});
MARS2.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 2 `);
  console.log(`Hi ${MARS2.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS2.guilds.size} " ]`);
});
MARS3.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 3`);
  console.log(`Hi ${MARS3.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS3.guilds.size} " ]`);
});
MARS4.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 4`);
  console.log(`Hi ${MARS4.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS4.guilds.size} " ]`);
});
MARS5.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 5`);
  console.log(`Hi ${MARS5.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS5.guilds.size} " ]`);
});
MARS6.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 6`);
  console.log(`Hi ${MARS6.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS6.guilds.size} " ]`);
});
MARS7.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 7`);
  console.log(`Hi ${MARS7.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS7.guilds.size} " ]`);
});
MARS8.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 8`);
  console.log(`Hi ${MARS8.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS8.guilds.size} " ]`);
});
MARS9.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 9`);
  console.log(`Hi ${MARS9.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS9.guilds.size} " ]`);
});
MARS10.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 10`);
  console.log(`Hi ${MARS10.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS10.guilds.size} " ]`);
});
MARS11.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 11`);
  console.log(`Hi ${MARS11.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS11.guilds.size} " ]`);
});
MARS12.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 12`);
  console.log(`Hi ${MARS12.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS12.guilds.size} " ]`);
});
MARS13.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 13`);
  console.log(`Hi ${MARS13.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS13.guilds.size} " ]`);
});
MARS14.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 14`);
  console.log(`Hi ${MARS14.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS14.guilds.size} " ]`);
});
MARS15.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی15`);
  console.log(`Hi ${MARS15.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS15.guilds.size} " ]`);
});
MARS16.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی16`);
  console.log(`Hi ${MARS16.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS16.guilds.size} " ]`);
});
MARS17.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی17`);
  console.log(`Hi ${MARS17.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS17.guilds.size} " ]`);
});
MARS18.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی18`);
  console.log(`Hi ${MARS18.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS18.guilds.size} " ]`);
});
MARS19.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی19`);
  console.log(`Hi ${MARS19.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS19.guilds.size} " ]`);
});
MARS20.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی20`);
  console.log(`Hi ${MARS20.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS20.guilds.size} " ]`);
});
MARS21.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی21`);
  console.log(`Hi ${MARS21.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS21.guilds.size} " ]`);
});
MARS22.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی22`);
  console.log(`Hi ${MARS22.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS22.guilds.size} " ]`);
});
MARS23.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی23`);
  console.log(`Hi ${MARS23.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS33.guilds.size} " ]`);
});

MARS24.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی24`);
  console.log(`Hi ${MARS24.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS24.guilds.size} " ]`);
});
MARS25.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی25`);
  console.log(`Hi ${MARS25.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS25.guilds.size} " ]`);
});
MARS26.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی26`);
  console.log(`Hi ${MARS26.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS26.guilds.size} " ]`);
});
MARS27.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 27`);
  console.log(`Hi ${MARS27.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS27.guilds.size} " ]`);
});
MARS28.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 28`);
  console.log(`Hi ${MARS28.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS28.guilds.size} " ]`);
});
MARS29.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 29`);
  console.log(`Hi ${MARS29.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS29.guilds.size} " ]`);
});
MARS30.on("ready", () => {
  console.log(`[MARS] : الحساب رقم 30 يعمل`);
  console.log(`Hi ${MARS30.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS30.guilds.size} " ]`);
});
MARS31.on("ready", () => {
  console.log(`[MARS] : 31 ئەکاونتی `);
  console.log(`Hi ${MARS31.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS31.guilds.size} " ]`);
});
MARS32.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 32 `);
  console.log(`Hi ${MARS32.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS32.guilds.size} " ]`);
});
MARS33.on("ready", () => {
  console.log(`[MARS] : 33ئەکاونتی `);
  console.log(`Hi ${MARS33.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS33.guilds.size} " ]`);
});
MARS34.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی34 `);
  console.log(`Hi ${MARS34.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS34.guilds.size} " ]`);
});
MARS35.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی35 `);
  console.log(`Hi ${MARS35.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS35.guilds.size} " ]`);
});
MARS36.on("ready", () => {
  console.log(`[MARS] : 36ئەکاونتی `);
  console.log(`Hi ${MARS36.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS36.guilds.size} " ]`);
});
MARS37.on("ready", () => {
  console.log(`[MARS] :37 ئەکاونتی `);
  console.log(`Hi ${MARS37.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS37.guilds.size} " ]`);
});
MARS38.on("ready", () => {
  console.log(`[MARS] : 38ئەکاونتی `);
  console.log(`Hi ${MARS38.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS38.guilds.size} " ]`);
});
MARS39.on("ready", () => {
  console.log(`[MARS] : 39ئەکاونتی `);
  console.log(`Hi ${MARS39.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS39.guilds.size} " ]`);
});
MARS40.on("ready", () => {
  console.log(`[MARS] :40 ئەکاونتی `);
  console.log(`Hi ${MARS40.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS40.guilds.size} " ]`);
});
MARS41.on("ready", () => {
  console.log(`[MARS] : 41ئەکاونتی `);
  console.log(`Hi ${MARS41.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS41.guilds.size} " ]`);
});
MARS42.on("ready", () => {
  console.log(`[MARS] : 42ئەکاونتی `);
  console.log(`Hi ${MARS42.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS42.guilds.size} " ]`);
});
MARS43.on("ready", () => {
  console.log(`[MARS] : 43ئەکاونتی `);
  console.log(`Hi ${MARS43.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS4.guilds.size} " ]`);
});
MARS44.on("ready", () => {
  console.log(`[MARS] : 44ئەکاونتی `);
  console.log(`Hi ${MARS44.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS44.guilds.size} " ]`);
});
MARS45.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی45 `);
  console.log(`Hi ${MARS4.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS45.guilds.size} " ]`);
});
MARS46.on("ready", () => {
  console.log(`[MARS] : 46ئەکاونتی `);
  console.log(`Hi ${MARS46.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS46.guilds.size} " ]`);
});
MARS47.on("ready", () => {
  console.log(`[MARS] :47 ئەکاونتی `);
  console.log(`Hi ${MARS47.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS4.guilds.size} " ]`);
});
MARS48.on("ready", () => {
  console.log(`[MARS] :48 ئەکاونتی `);
  console.log(`Hi ${MARS48.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS48.guilds.size} " ]`);
});
MARS49.on("ready", () => {
  console.log(`[MARS] : 49ئەکاونتی `);
  console.log(`Hi ${MARS49.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS49.guilds.size} " ]`);
});
MARS50.on("ready", () => {
  console.log(`[MARS] :50 ئەکاونتی `);
  console.log(`Hi ${MARS50.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS50.guilds.size} " ]`);
});

// ====[ IRAQxSTAFF] ==== //
const marsDEV = require("request");
const invitecode = config.invite;
MARS.on("ready", () => {
  console.log(`[BOT] ${MARS.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

MARS2.on("ready", () => {
  console.log(`[BOT] ${MARS2.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

MARS3.on("ready", () => {
  console.log(`[BOT] ${MARS3.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

MARS4.on("ready", () => {
  console.log(`[BOT] ${MARS4.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

MARS5.on("ready", () => {
  console.log(`[BOT] ${MARS5.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

MARS6.on("ready", () => {
  console.log(`[BOT] ${MARS6.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

MARS7.on("ready", () => {
  console.log(`[BOT] ${MARS7.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

MARS8.on("ready", () => {
  console.log(`[BOT] ${MARS8.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

MARS9.on("ready", () => {
  console.log(`[BOT] ${MARS9.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

MARS10.on("ready", () => {
  console.log(`[BOT] ${MARS10.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

MARS11.on("ready", () => {
  console.log(`[BOT] ${MARS11.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

MARS12.on("ready", () => {
  console.log(`[BOT] ${MARS12.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

MARS13.on("ready", () => {
  console.log(`[BOT] ${MARS13.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

MARS14.on("ready", () => {
  console.log(`[BOT] ${MARS14.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

MARS15.on("ready", () => {
  console.log(`[BOT] ${MARS15.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

MARS16.on("ready", () => {
  console.log(`[BOT] ${MARS16.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

MARS17.on("ready", () => {
  console.log(`[BOT] ${MARS17.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

MARS18.on("ready", () => {
  console.log(`[BOT] ${MARS18.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

MARS19.on("ready", () => {
  console.log(`[BOT] ${MARS19.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

MARS20.on("ready", () => {
  console.log(`[BOT] ${MARS20.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});
MARS21.on("ready", () => {
  console.log(`[BOT] ${MARS22.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS23.on("ready", () => {
  console.log(`[BOT] ${MARS23.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS24.on("ready", () => {
  console.log(`[BOT] ${MARS24.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS25.on("ready", () => {
  console.log(`[BOT] ${MARS25.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS25.on("ready", () => {
  console.log(`[BOT] ${MARS25.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS25.on("ready", () => {
  console.log(`[BOT] ${MARS25.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS26.on("ready", () => {
  console.log(`[BOT] ${MARS26.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS27.on("ready", () => {
  console.log(`[BOT] ${MARS27.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS28.on("ready", () => {
  console.log(`[BOT] ${MARS28.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS29.on("ready", () => {
  console.log(`[BOT] ${MARS29.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS30.on("ready", () => {
  console.log(`[BOT] ${MARS30.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS31.on("ready", () => {
  console.log(`[BOT] ${MARS31.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS32.on("ready", () => {
  console.log(`[BOT] ${MARS32.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS33.on("ready", () => {
  console.log(`[BOT] ${MARS33.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS34.on("ready", () => {
  console.log(`[BOT] ${MARS34.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS35.on("ready", () => {
  console.log(`[BOT] ${MARS35.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS36.on("ready", () => {
  console.log(`[BOT] ${MARS36.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS37.on("ready", () => {
  console.log(`[BOT] ${MARS37.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS38.on("ready", () => {
  console.log(`[BOT] ${MARS38.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS39.on("ready", () => {
  console.log(`[BOT] ${MARS39.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS40.on("ready", () => {
  console.log(`[BOT] ${MARS40.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS41.on("ready", () => {
  console.log(`[BOT] ${MARS41.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS42.on("ready", () => {
  console.log(`[BOT] ${MARS42.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS43.on("ready", () => {
  console.log(`[BOT] ${MARS43.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS44.on("ready", () => {
  console.log(`[BOT] ${MARS44.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS45.on("ready", () => {
  console.log(`[BOT] ${MARS45.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS46.on("ready", () => {
  console.log(`[BOT] ${MARS46.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS47.on("ready", () => {
  console.log(`[BOT] ${MARS47.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS48.on("ready", () => {
  console.log(`[BOT] ${MARS48.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS49.on("ready", () => {
  console.log(`[BOT] ${MARS49.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS50.on("ready", () => {
  console.log(`[BOT] ${MARS50.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

// DONE //
// ======= [ Console LOG - END   ] ======== //

MARS.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "yalla") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});

// ======= [ Say MODE  ] ======== //
MARS.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "1") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS2.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "2") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS3.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "3") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS4.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "4") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS5.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "5") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
//
MARS6.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "6") {
    //
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
MARS7.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "7") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS8.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "8") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS9.on("message", message => {
  if (message.author.bot) return; //
  if (!message.content.startsWith(config.prefix)) return;
  //
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "9") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS10.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "10") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS11.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "11") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS12.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "12") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS13.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "13") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS14.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "14") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS15.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "15") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS16.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "16") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
//

MARS17.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "17") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS18.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "18") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
MARS19.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //

  if (command == config.groupnm + "19") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars"); //
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
MARS20.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "20") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS21.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "21") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS22.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "22") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS23.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "23") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS24.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "24") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS25.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "25") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS26.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "26") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS27.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "27") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS28.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "28") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS29.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "29") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS30.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "30") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS31.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "31") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS32.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "32") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS33.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "33") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS34.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "34") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS35.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "35") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS36.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "36") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS37.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "37") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS38.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "38") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS39.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "39") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS40.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "40") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

// ======= [ Say MODE - END   ] ======== //

// ======= [ MODE - Join Server , add Friend   ] ======== //
MARS.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

MARS2.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS3.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS4.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS5.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS6.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS7.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS9.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS10.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS11.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

MARS12.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS13.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS14.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS15.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS16.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS17.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS18.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS19.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS20.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS21.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS22.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS23.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS24.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS25.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS26.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS27.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS28.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS29.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS30.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS31.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS32.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS33.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS34.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS35.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS36.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS37.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS38.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS39.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS40.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS41.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS42.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS43.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS44.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS45.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS46.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS47.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS48.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS49.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS50.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

// ======= [ MODE - Join Server , add Friend END  ] ======== //

//

// ======= [ MODE - React MSG END  ] ======== //

// ======= [ functions - Join Server , add Friend   ] ======== //
async function joinServer(invite, message) {
  console.log(invite);
  require("request")(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      json: true,
      headers: {
        authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        if (body.message.includes("Unknown Invite"))
          return console.log("[ERROR] - Unkown Invite.");
        if (body.message.includes("banned"))
          return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
      }
    }
  );
}

async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await require("request")(
      {
        url: `https://discordapp.com/api/v6/users/@me/relationships`,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          authorization: message.client.token
        },
        body: {
          username: user.username,
          discriminator: parseInt(user.discriminator)
        }
      },
      async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body ? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  } catch (e) {
    console.log(`[ERROR] - ${e}`);
  }
}

// ======= [ functions - Join Server , add Friend END  ] ======== //

// ======= [ StayVoice - MODE  ] ======== //
MARS.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP up**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت!**"
      );
    }
  }
});
MARS15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت!**"
      );
    }
  }
});
MARS16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت😁**"
      );
    }
  }
});
MARS21.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS22.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS23.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS24.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS25.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS26.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS28.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS29.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS30.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS31.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS32.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS33.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS34.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS35.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS36.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS37.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS38.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS39.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂KTLxUP**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS40.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS41.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS42.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS43.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS44.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS45.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS46.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS47.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS48.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS49.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS50.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂IRAQxSTAFF**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

// ======= [ SPAM - MODE end ] ======== //

// ======= [ Credits - INFO ] ======== //age", message => {

// ======= [ Credits - INFO end ] ======== //

// ======= [ Daily - INFO ] ======== //"#dai

// ======= [ Daily - INFO end ] ======== //

// ======= [ PROFILE - INFO ] ======== //

//////// playing or dnd ////////

MARS.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [
    ///// لێرانە شتێک بووسە بۆ ستریمینگەکە
    //// لە شوێنی تێکستەکان شتەکانت بنووسە
    `KTL`,
    ` KTLxUP   PORNHUB`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS2.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`PORN `, `KTLxUP `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS2.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS3.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS3.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS4.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS4.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS5.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS5.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS6.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTK`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS6.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS7.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS7.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS8.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS8.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS9.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [` KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS9.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS10.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, `KTLxUP `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS10.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS11.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS11.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS12.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `PORNHUB`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS12.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS13.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, `PORN HUB`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS13.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS14.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS14.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS15.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, `KTLxUP  `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS15.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS16.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS16.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS17.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [` pornhub`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS17.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS18.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP  `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS18.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS19.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, `KTLxUP `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS19.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS20.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS20.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS21.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS21.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS22.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS22.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

MARS23.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, `KTLxUP `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS23.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS24.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS24.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS25.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, ` KTLxUP `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS25.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS26.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `  KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS26.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS27.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP  `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS27.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS28.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL `, `  KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS28.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS29.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KYL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS29.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS30.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS30.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS31.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [` KTL`, ` KTLxUP `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS31.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS32.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS32.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS33.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS33.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS34.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS34.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS35.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS35.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS36.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, ` KTLxUP `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS36.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS37.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`pornhub`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS37.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS38.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS38.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS39.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS39.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS40.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`KTL`, `KTLxUP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS40.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS41.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxSTAFF`, ` IRAQxBADBOY`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS41.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS42.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxBADBOY `, `IRAQxSTAFF  `];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS42.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS43.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxSTAFF`, `IRAQxBADBOY`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS43.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS44.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxSTAFF`, ` IRAQxBADBOY`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS44.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS45.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxSTAFF`, `IRAQxBADBOY`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS45.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS46.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxSTAFF`, `IRAQxBADBOY`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS46.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS47.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxSTAFF`, `IRAQxBADBOY`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS47.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS48.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxSTAFF`, ` IRAQxBADBOY`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS48.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS49.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxSTAFF`, ` IRAQxBADBOY`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS49.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
MARS50.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`IRAQxBADBOY `, `IRAQxSTAFF`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS50.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

// ======= [ PROFILE - INFO end ] ======== //

/// IRAQxREDBULL
MARS2.login("NzcxNzg1NDUwNjI4MDU1MDgy.X52bDw.Wd_fCSe0OdYpvKflOnCG3OVT3aY");

MARS3.login("NzcxNzg4NDI2MDc2ODgwOTM2.X52bWw.REVsikj_1eWN1CqUGN44r2--XlU");

MARS4.login("NzcxNzkwMTU2OTg5OTg4ODg1.X52b6A.pKVIzHmzI10FJtZYGfk7jkHUtjI");

MARS5.login("NzcxNzkxMTkyNDgzNDMwNDAy.X52csA.c1bQj3JPLBdE5-eslNUWLi7_wno");

MARS6.login("NzcxNzkxODcyMDk5NjE0NzIw.X52deA.0dJeYvL9wWgH6Fglx94CNMM0NxI");

MARS7.login("NzcxNzkyMDAxODI0OTgxMDQ0.X52erg.4hNUdqn_XABUM_l8EbpjdIJmyI8");

MARS8.login("NzcxNzkyNjk4MjQ4MDAzNTg1.X52fLg.RvR8J1AlACIf2W5dDujLobMeDh4");

MARS9.login("NzcxNzkzNDQzMTUxNDEzMzAw.X52flQ.63yqsz_RSxRlh6LIf9l3FpN88a8");

MARS10.login("NzcxNzk0MDc4MTIzNjg3OTk3.X52f-A.aMPPgSv2HWf9NpXubyWjcAIwRro");

MARS11.login("NzcxNzk1MDg1OTE0MDEzNzQ3.X52tKQ.g7baC3mi3O_wbJAnoxh-hKYZOFQ");

MARS12.login("NzcxNzk1NzQwOTUxNDQ1NTU0.X52tlA._etAivUzlLq6DtnrbBLw4Ewt5Is");

MARS13.login("NzcxNzk2MzY3NjAxMzAzNjEz.X52t9g.1QsSOoIQvrnj-a2gYkp_4p72wic");

MARS14.login("NzcxNzk2ODYwNzc1NTYzMjk1.X52uVg.tDTUPRuVomk1IInmtjGYv5qAMhU");

MARS15.login("NzcxNzk3NDI2Mzg2MTA4NDM4.X52uug.FIdjP2rUZjHI3PB4c3H5WvZFzGg");

MARS16.login("NzcxODA4OTA2OTc5NTczNzkx.X52wAg.BKlCcymp6IcK-3R6Hjj0Yr2Cw6g");

MARS17.login("NzcxODA5OTg0MTg2ODEwNDI4.X52xfw.1zXh__Fnq-mApW4b3VktbtsV02I");

MARS18.login("NzcxNzk4MjIxMzk5MjYxMTg0.X52x9w.1wmn8yikPEVzpFIbibOw4yNLsik");

MARS19.login("NzcxNzk5MDg0Nzc1MjQzODU2.X5207Q.xtq-X_qQTbHzVkkiX9QO03SMjeA");

MARS20.login("NzcxNzk5ODI5MzAzMDAxMTE4.X521bA.tij3YFudW0r7Pyra-s6OdNSVACc");

MARS21.login("NzcxODAxMjE5NzM0OTYyMTg3.X5213w.B6hszQOGyptPaIcS0gRGExyEyZ4");

MARS22.login("NzcxODAyMjMyMDYwMzc5MTcx.X522eA.QHMDi8QHmMZQjLT4oUuRhKfxPuI");

MARS23.login("NzcxODAzMzc1OTIxNTI4ODkz.X5221w.wBY2LAz5zm50tkGn5GRElUkjse0");

MARS24.login("NzcxODA0MTMyMzM2MDc0Nzcz.X523TQ.wiLYzvnialknxzFJep9ZYfAza4w");

MARS25.login("NzcxODA1MDUxNzMwNzg4Mzgy.X523_A.yQSQTeapjjlOiNKkuVY_ofVw6s4");

MARS26.login("NzcxODA1NzE5MTk2MjA1MDY2.X524hQ.cACQ3YBPd8C3L3XuZru6TFyEm0k");

MARS27.login("NzcxODA2Mzk4OTk2MTUyMzcy.X5249w.9cQ3AOlfUPXy6RwUSL6GBxV0vA0");

MARS28.login("NzcxODA3MzIyMjcwODU5MzA3.X525bA.2BKN__-I6GIb97q6xuujI9taj_0");

MARS29.login("NzcxODA3ODY4NjU4Nzc4MTQy.X5253w.JMCgn5nJAyKezF4DQcuLgoyUqWc");

MARS30.login("NzcxODA4NDYxODgwMDMzMzEx.X526Sg.ol1htcq2rGhHxHHrifg8VEbsBs0");

MARS31.login("NzcxODA5MDc3NzIxNDMyMTA1.X5267w.dgBCALJ7vVND9CyvRKIPMout3H4");

MARS32.login("NzcxODA5ODQwNjI3ODQzMDk1.X5275g.4BtbQjYZF8gsRJeU_n55ClI8-Ig");

MARS33.login("NzcxODEwMzA3MDQ3NTU1MTEy.X528YQ.KGB-l1-YDlkx5k_3lI-QpvdoHxI");

MARS34.login("NzcxODEwODc5Nzc0NjU0NTA3.X528xg.7V7TFou5OZK5HpxOQ_U9icbUveE");

MARS35.login("NzcxODExNDc4NDIwMTkzMjkx.X529Mw.lEGqjI2fho45oATG3wLSzbVDkAo");

MARS36.login("NzcxODExNTE5NTI4NDM1Nzky.X529jg.86wklD2FsseflqMlYkPmwXZioJg");

MARS37.login("NzcxODEzMDc4MzY3MDc2Mzgy.X53QHQ.D92_lhxZDArki934gg_cRTZtlog");

MARS38.login("NzcxODEzNzc5NzcxNzUyNDY5.X56STw.TZcbJha2OHcZ3rkGSm8t88aPEPk");

MARS39.login("NzcxODEyMjA0MjMxOTE3NjA4.X56THw.TfnhAn5RVShcPt3mYjyuAfKJgTw");

MARS40.login("NzcxODEyODk4ODYyOTIzNzk3.X56Tcg.s9ud5Q-DO-jz4jwcweIZBOXirrs");

MARS.login("NzcxNzg1NDUwNjI4MDU1MDgy.X52bDw.Wd_fCSe0OdYpvKflOnCG3OVT3aY");
