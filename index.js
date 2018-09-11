const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;



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

  let welcomechannel = member.guild.channels.find(`name`, "📣-welcome-notif");
  welcomechannel.send(`${member} has joined the Hoosky Chat! Welcome! 🐺`);
});

bot.on("guildMemberRemove", async member => {

  console.log(`${member.id} left the server`);

  let welcomechannel = member.guild.channels.find(`name`, "📣-welcome-notif");
  welcomechannel.send(`${member} has left the Hoosky Chat. We will miss you! 💔`);

});

bot.on("channelCreate", async channel =>{

  console.log(`${channel.name} has been created`);

  let sChannel = channel.guild.channels.find(`name`, "💬-mainchat");
  sChannel.send(`${channel} has been created`);

});

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
