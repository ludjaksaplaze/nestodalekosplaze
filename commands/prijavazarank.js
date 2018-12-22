const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "pomoc"){
      message.reply("Koriscenje: br!problem <vas problem>");
      return;
    }
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return errors.cantfindUser(message.channel);
    let iskustvo = args.join(" ").slice(22);
    if(!iskustvo) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("--PROBLEM--")
    .setColor(orange)
    .addField("Ime Korisnika:", `<${rUser}> sa id ${rUser.id}`)
    .addField("Problem:", iskustvo)

    let kanalproblema = message.guild.channels.find(`name`, "problemi");
    if(!kanalproblema) return message.channel.send("Ne mogu da pronadjem kanal problemi.");
  kanalproblema.send(reportEmbed);

}

module.exports.help = {
  name: "problem"
}
