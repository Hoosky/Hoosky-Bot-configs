const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let topic = JSON.parse(fs.readFileSync("./settopic.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, You can't do that.");
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if (!cUser) return message.reply("Could not find set topic.");
  let topic = topic [cUser.id].topic;

  message.reply(`The current topic is: ${settopic}`);


}

module.exports.help = {
  name: "ctopic"
}
