const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Access Denied");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person cannot be kicked!")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("##19ff00")
  .addField("Banned User", `${kUser} with ID ${kUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", breason);

  let incidentChannel = message.guild.channels.find(`name`, "🛑-incidents");
  if(!incidentChannel) return message.channel.send ("Can't find incidents channel.");

  message.guild.member(bUser).bam(bReason)
  incidentchannel.send(benEmbed)
}

module.exports.help = {
  name: "ban"
}
