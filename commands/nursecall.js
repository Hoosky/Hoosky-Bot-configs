const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL
  let botembed = new Discord.RichEmbed()
  .setDescription("Response:")
  .setColor("#00FFEC")
  .setThumbnail(bicon)
  .addField("Yes Mama? :3 (*wags tail*)")

  return message.channel.send(botembed)
}

module.exports.help = {
  name: " Oh! Hoosky Bot!"
}
