const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nemozes ti to braleeee.");
  if(args[0] == "pomoc"){
    message.reply("Korišćenje: br!mutaj <@korisnik> <1s/m/h/d> <razlog> ");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Ne mogu da nadjem korisnika.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Ne mogu da ga mutam!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Molim te kaži razlog.");

  let muterole = message.guild.roles.find(`name`, "log");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Nisi rekao koliko dugo da bude mutovan!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Zdravo! Mutovan si na ${mutetime}. Izvini!`)
  }catch(e){
    message.channel.send(`Korisnik je mutovan... al njegov DM je zakljucan. On će biti mutovan na ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mutovan od strane ${message.author}`)
  .setColor(orange)
  .addField("Mutovan korisnik:", tomute)
  .addField("Mutovan u kanalu:", message.channel)
  .addField("Vreme", message.createdAt)
  .addField("Vreme dokle ce biti mutovan", mutetime)
  .addField("Razlog", reason);

  let incidentschannel = message.guild.channels.find(`name`, "log");
  if(!incidentschannel) return message.reply("Molim te napravi kanal log!");
  incidentschannel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> je unmutovan/ana!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mutaj"
}
