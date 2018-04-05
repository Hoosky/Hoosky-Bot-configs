const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry you do not have access to that command.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role please.")
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id));
  await(rMember.addRole(gRole.id));

  try{
    rMember.send(`You have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`<@${rMember.id}> has been given the role ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}
