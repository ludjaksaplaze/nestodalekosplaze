const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nemaš Dozvolu!!");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Ocistio sam ${args[0]} poruka/u/e.`).then(msg => msg.delete(5000));
});

}

module.exports.help = {
  name: "ocisti"
}
