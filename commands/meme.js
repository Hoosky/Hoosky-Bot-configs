const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

   let {body} = await superagent
   .get('https://api.imgur.com/3/g/memes/viral')

   let memembed = new Discord.RichEmbed()
   .setColor("#5000ff")
   .setTitle("RANDOM MEME:")
   .setImage(body.url);

   message.channel.send(memembed)

}

module.exports.help = {
  name: "meme"
}
