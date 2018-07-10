const agree = "white_check_mark";
const disagree = ":x:";

module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Vote now!");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
  message.channel.send(`Vote done! Here are the results! \n\n${agree}: ${reactions.get(agree).count-1}\n${disagree}: ${reactions.get(disagree).count-1}`);
}

module.exports.help = {
  name: "vote"
}
