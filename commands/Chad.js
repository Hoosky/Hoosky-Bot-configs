const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL
  let botembed = new Discord.RichEmbed()
  .setDescription("Response:")
  .setColor("#00FFEC")
  .setThumbnail(bicon)
  .addField("https://i.imgur.com/z8fZiIA.jpg")

  return message.channel.send(botembed)
}

module.exports.help = {
  name: "Chad"
}
