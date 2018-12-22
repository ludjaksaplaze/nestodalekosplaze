const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
if (!message.member.hasPermission("MANAGE_ROLES")) return;// errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "pomoc") {
    message.reply("Koriscenje: s!dajrank <korisnik> <rank>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Niste rekli ime ranka!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Nemoj da nadjem taj rank.");

  if (rMember.roles.has(gRole.id)) return message.reply("On/ona vec ima taj rank!");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Cestitam,dobio si role ${gRole.name}!`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Cestitam <@${rMember.id}>, on je dobio rank ${gRole.name}. Probao sam da ga konaktiram preko privatnih poruka ali njegov dm je zakljucan.`)
  }
}

module.exports.help = {
  name: "dajrank"
}
