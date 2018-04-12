const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const sql = require("sqlite");
sql.open("./score.sqlite");
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("with his ball");

});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined the server`);

  let welcomechannel = member.guild.channels.find(`name`, "📜-user-logs");
  welcomechannel.send(`${member} has joined the Hoosky Chat! Welcome! 🐺`);
});

bot.on("guildMemberRemove", async member => {

  console.log(`${member.id} left the server`);

  let welcomechannel = member.guild.channels.find(`name`, "📜-user-logs");
  welcomechannel.send(`${member} has left the Hoosky Chat. We will miss you! 💔`);

});

bot.on("channelCreate", async channel =>{

  console.log(`${channel.name} has been created`);

  let sChannel = channel.guild.channels.find(`name`, "💬-mainchat");
  sChannel.send(`${channel} has been created`);

});


bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  bot.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type !== "text") return;

    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong!");
    }

    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) {
        sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      } else {
        let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
        if (curLevel > row.level) {
          row.level = curLevel;
          sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
          message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
        }
        sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
      }
    }).catch(() => {
      console.error;
      sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
        sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      });
    });

    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "level")) {
      sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) return message.reply("Your current level is 0");
        message.reply(`Your current level is ${row.level}`);
      });
    } else

    if (message.content.startsWith(prefix + "points")) {
      sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) return message.reply("sadly you do not have any points yet!");
        message.reply(`you currently have ${row.points} points, good going!`);
      });
    }

  });
  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});
bot.login(process.env.BOT_TOKEN);
