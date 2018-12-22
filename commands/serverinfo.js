const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informacija Server")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Ime Servera", message.guild.name)
    .addField("Napravljen", message.guild.createdAt)
    .addField("Ti Si Usao", message.member.joinedAt)
    .addField("Totalno Korisnika", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
