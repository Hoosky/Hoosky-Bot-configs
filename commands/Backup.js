const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permission to use this command! (Hoosky only)");
message.channel.send("✅ Done! Server prefs and configs saved to: <index.js/backuplogs.js>")

}

module.exports.help = {
  name: "backup"
}
