const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

   let {body} = await superagent
   .get(`https://yesno.wtf/api`);

   let dogembed = new Discord.RichEmbed()
   .setColor("#5000ff")
   .setTitle(":ballot_box_with_check:")
   .setImage(body.image);

   message.channel.send(dogembed)

}

module.exports.help = {
  name: "yesno"
}
