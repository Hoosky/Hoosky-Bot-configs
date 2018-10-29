const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permission to use this command! (Hoosky only)");
message.channel.send("❗[WARNING]❗ You are about to lift all previous restrictions and bans on that user! Please say: (+HConfirm) to confirm this action.")

}

module.exports.help = {
  name: "liftall"
}
