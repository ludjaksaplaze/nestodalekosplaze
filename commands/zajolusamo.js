const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
if(args[0] == "pomoc"){
  message.reply("Koriscenje: s!banner <oznacite sebe> <upisite kakav banner vam je potreban itd..>");
  return;
}
//let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let zbanner = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("NARUCEN BANNER")
        .setColor("#15f153")
        .addField("Narucava korisnik", `${message.author}`)
        .addField("On zeli ovakav banner:", zbanner);

    let prijavechannel = message.guild.channels.find(`name`, "porucen-banner");
    if(!prijavechannel) return message.channel.send("Ne mogu da nadjem kanal  porucen-banner");

    message.delete().catch(O_o=>{});
  prijavechannel.send(reportEmbed);
}

module.exports.help = {
  name: "banner"
}
