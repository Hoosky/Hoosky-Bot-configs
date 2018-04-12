const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Ah! Ah! Ah! You do not have the power to do that!");
  if(!args[0] || args[0 == "help"]) return message.reply("How to use: +settopic <new topic>");

  let topic = JSON.parse(fs.readFileSync("./settopic.json", "utf8"));

  topic[message.guild.id] = {
    topic: args[0]
  };

  fs.writeFile("./settopic.json", JSON.stringify(topic), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Topic Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "changetopic"
}
