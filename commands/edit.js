const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permission to use this command! (Hoosky only)");
message.channel.send("A DM has been sent to you to modfiy my configs!")

}

module.exports.help = {
  name: "editconfig"
}
