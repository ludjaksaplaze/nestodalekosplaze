const Discord = require("discord.js");
const fs = require(`fs`);
const invajt = fs.readFileSync(`Storage/invitelink.txt`,`utf8`);


module.exports.run = async (bot, message, args) => {

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
 //ne dovrsena komanda z!help //"Commands:  z!help , z!commandsinfo,z!creator , !hello , z!kick , z!ban , z!report , z!serverinfo , z!botinfo"
return message.author.send(invajt).then(m => {
  message.channel.send("Pogledaj `DM`,poslao sam ti invite link za mene!!")
});
}

module.exports.help = {
  name:"pozovi"
}
