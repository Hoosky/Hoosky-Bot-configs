const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return messsage.reply("Sorry. You are not high enough of a rank to do that.");
  if(!args[0]) return message.channel.send("Sorry. You are not high enough of a rank to do that.")
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Erased ${args[0]} messages in 0.5ms`).then(msg => msg.delete(5000));
  });

  }

module.exports.help = {
  name: "purge"
}
