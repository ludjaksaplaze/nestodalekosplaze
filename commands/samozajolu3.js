const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
if(args[0] == "pomoc"){
  message.reply("Koriscenje: s!profilna <oznacite sebe> <upisite kakavu profilnu zelite itd..>");
  return;
}
//let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let zbanner = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("NARUCENA PROFILNA")
        .setColor("#15f153")
        .addField("Narucava korisnik", `${message.author}`)
        .addField("On zeli ovakavu profilnu:", zbanner);

    let prijavechannel = message.guild.channels.find(`name`, "porucena-profilna");
    if(!prijavechannel) return message.channel.send("Ne mogu da nadjem kanal porucena-profilna");

    message.delete().catch(O_o=>{});
  prijavechannel.send(reportEmbed);
}

module.exports.help = {
  name: "profilna"
}
