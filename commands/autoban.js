const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permission to use this command! (Hoosky only)");
message.channel.send(":white_check_mark: User has successfully been put on Auto-Ban.")

}

module.exports.help = {
  name: "autoban"
}
