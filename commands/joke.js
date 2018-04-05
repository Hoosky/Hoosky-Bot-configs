const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

   let {body} = await superagent
   .get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke');

   let dogembed = new Discord.RichEmbed()
   .setColor("#5000ff")
   .setTitle(":ballot_box_with_check:")
   .setImage(body.id);

   message.channel.send(dogembed)

}

module.exports.help = {
  name: "joke"
}
