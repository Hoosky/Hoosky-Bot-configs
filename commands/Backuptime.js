const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permission to use this command! (Hoosky only)");
message.channel.send("The Auto Backup Time interval is currently set to: 36000s")

}

module.exports.help = {
  name: "backuptimeint"
}
