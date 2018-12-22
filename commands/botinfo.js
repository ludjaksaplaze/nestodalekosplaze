const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("BruTal™ Bot Info")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Svrha", "**BruTal™** Custom Bot")
    .addField("Napravljen na", bot.user.createdAt)
    .addField("Kreator", "BrateX");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
