const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

   let {body} = await superagent
   .get('https://api.imgur.com/3/LTAe2j3.png')

   let dogembed = new Discord.RichEmbed()
   .setColor("#5000ff")
   .setTitle(":Sprayed!:")
   .setImage(body.url);

   message.channel.send(dogembed)

}

module.exports.help = {
  name: "+Hspray"
}
