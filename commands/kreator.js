const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Kreator")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Kreator:", "BrateX")
    .addField("Zasluge:", "Ellie,Flamingo")
    .addField("Svrha:", "BruTali Team Custom Bot");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"kreator"
}
