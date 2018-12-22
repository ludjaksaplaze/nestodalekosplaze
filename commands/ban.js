const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "pomoc"){
      message.reply("Korišćenje: br!banuj <korisnik> <razlog>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message);
    let bReason = args.join(" ").slice(22);
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banovan Korisnik", `${bUser} with ID ${bUser.id}`)
    .addField("Banovan Od Strane Moderatora", `<@${message.author.id}> sa ID-om ${message.author.id}`)
    .addField("Banovan U", message.channel)
    .addField("Vreme", message.createdAt)
    .addField("Razlog", bReason);

    let logchannel = message.guild.channels.find(`name`, "log");
    if(!logchannel) return message.channel.send("Ne mogu naći kanal `log` .");

    message.guild.member(bUser).ban(bReason);
  logchannel.send(banEmbed);
}

module.exports.help = {
  name:"banuj"
}
