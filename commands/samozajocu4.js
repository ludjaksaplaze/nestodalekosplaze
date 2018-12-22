const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
if(args[0] == "pomoc"){
  message.reply("Koriscenje: s!intro <oznacite sebe> <upisite kakav intro vam je potreban itd..>");
  return;
}
//let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let zbanner = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("NARUCEN INTRO")
        .setColor("#15f153")
        .addField("Narucava korisnik", `${message.author}`)
        .addField("On zeli ovakav intro:", zbanner);

    let prijavechannel = message.guild.channels.find(`name`, "porucen-intro");
    if(!prijavechannel) return message.channel.send("Ne mogu da nadjem kanal porucen-intro");

    message.delete().catch(O_o=>{});
  prijavechannel.send(reportEmbed);
}

module.exports.help = {
  name: "intro"
}
