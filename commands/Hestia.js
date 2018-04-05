const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL
  let botembed = new Discord.RichEmbed()
  .setDescription("Response:")
  .setColor("#00FFEC")
  .setThumbnail(bicon)
  .addField("Hestia is Bestia")
  .addField("https://i.pinimg.com/originals/71/ca/76/71ca760e25f6b45c7e4f9ba843275a22.gif")

  return message.channel.send(botembed)
}

module.exports.help = {
  name: "Hestia"
}
