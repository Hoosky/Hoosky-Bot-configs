const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let ctopic = JSON.parse(fs.readFileSync("./settopic.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!messgae.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, You can't do that.");
  let cUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if (!cUser) return message.reply("Could not find set topic.");
  let ctopic = topic [wUser.id].warns;

  message.reply(`The current topic is: ${ctopic}`);


}

module.exports.help = {
  name: "currenttopic"
}
