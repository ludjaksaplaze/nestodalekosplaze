  const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require(`fs`);
const commandsList = fs.readFileSync(`Storage/commands.txt`,`utf8`);
const creatorsList = fs.readFileSync(`Storage/creator.txt`,`utf8`);
const inviteLink = fs.readFileSync(`Storage/invitelink.txt`,`utf8`);
const embed = new Discord.RichEmbed()
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0){
    console.log("Nema Nikakvih Komanda..");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Komanda ${f} ucitana!`)
    bot.commands.set(props.help.name, props);
  });

});



bot.on("ready", async () => {
  console.log(`BruTal je sada online!!`);

  bot.user.setActivity("br!pomoc za listu komandi!", {type: "WATCHING"});

  //bot.user.setGame("^help, for list of commands");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
 if(!prefixes[message.guild.id]){
   prefixes[message.guild.id] = {
     prefixes: botconfig.prefix
   };
 }
   let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


});

bot.login(tokenfile.token);
