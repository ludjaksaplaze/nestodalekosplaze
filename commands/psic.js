const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ff330f")
  .setTitle("Psić  :dog:")
  .setImage(body.url)
  .setDescription("BruTal™ StaffTeam");

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "pas"
}
