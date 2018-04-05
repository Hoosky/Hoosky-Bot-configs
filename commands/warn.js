const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Access Denied");
  let wUSer = message.guild.member(message.mention.users.first()) || message.guild.member.get(args[0])
  if(!wUser) return message.reply("Couldn't find them");
  if(wUser.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry, No can do.")
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#19ff00")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Role not found, Sorry.");

    let mutetime ="10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`${wUser.tag} has been temp muted`)

    setTimeout(function(){
     wUser.removeRole(muterole.id)
     message.channel.reply("User Unmuted");
   }, ms(mutetime))
 }
 if(warns[wUSer.id].warns == 3){
   message.guild.member(wUser).kick(reason);
   message.channel.send(`${wUser.tag} has been kicked`)
 }


}

module.exports.help = {
  name: "warn"
}
