const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "pomoc"){
      message.reply("Koriscenje: br!izbaci <korisnik> <razlog>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Izbačen~")
    .setColor("#e56b00")
    .addField("Izbačen je", `${kUser} sa id ${kUser.id}`)
    .addField("Izbačen od strane", `<@${message.author.id}> sa id ${message.author.id}`)
    .addField("Izbačen u kanalu", message.channel)
    .addField("Vreme", message.createdAt)
    .addField("Razlog", kReason);

    let incidentiChannel = message.guild.channels.find(`name`, "loh");
    if(!incidentiChannel) return message.channel.send("Ne mogu naći kanal `log` .");

    message.guild.member(kUser).kick(kReason);
    incidentiChannel.send(kickEmbed);
}

module.exports.help = {
  name:"izbaci"
}
