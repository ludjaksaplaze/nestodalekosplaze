const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
if(args[0] == "pomoc"){
  message.reply("Koriscenje: br!prijavi <korisnik> <razlog>");
  return;
}
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Ne mogu da pronadjem korisnika.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("PRIJAVA")
    .setColor("#15f153")
    .addField("Prijavljen korisnik", `${rUser} sa id-om: ${rUser.id}`)
    .addField("Prijavljen od strane", `${message.author} sa id-om: ${message.author.id}`)
    .addField("U Kanalu", message.channel)
    .addField("Vreme", message.createdAt)
    .addField("Razlog", rreason);

    let prijavechannel = message.guild.channels.find(`name`, "prijave");
    if(!prijavechannel) return message.channel.send("Ne mogu da nadjem kanal `prijave`");


    message.delete().catch(O_o=>{});
    prijavechannel.send(reportEmbed);

}

module.exports.help = {
  name: "prijavi"
}
