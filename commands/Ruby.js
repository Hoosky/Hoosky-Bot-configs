const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let serverembed = new Discord.RichEmbed()
  .setDescription("Response:")
  .setColor("#00FFEC")
  .addField("http://25.media.tumblr.com/0df06df6ba68375584caf7e6b74c5003/tumblr_mvvzprpPDa1t0psroo2_500.png")

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
