const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.reply("You're not my Mama! :cold_sweat:");
message.channel.send("Yes Mama? :3 (**wags tail**) :heart:")

}

module.exports.help = {
  name: "Hoosky Bot Sweetie"
}
