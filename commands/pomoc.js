const Discord = require("discord.js");
const fs = require(`fs`);
const commandsList = fs.readFileSync(`Storage/commands.txt`,`utf8`);


module.exports.run = async (bot, message, args) => {

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
 //ne dovrsena komanda z!help //"Commands:  z!help , z!commandsinfo,z!creator , !hello , z!kick , z!ban , z!report , z!serverinfo , z!botinfo"
return message.author.send(commandsList).then(m => {
  message.channel.send("**Poslao sam ti listu komanda u** `DM`!")
});
}

module.exports.help = {
  name:"pomoc"
}
