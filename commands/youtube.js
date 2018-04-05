const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Random Youtube Video:")
  .setColor("#00FFEC")
  .setThumbnail(sicon)
  .addField("err:(s)https://api.youtube.com/random {requestname} requested by (`${user.id}`) failure to grab hedi!")

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "youtube"
}
