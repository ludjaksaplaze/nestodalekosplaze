const snek = module.require("snekfetch");
const api = "https://random.dog/woof.json";

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Kae..");

  let file = (await snek.get(api)).body.file;
  if(!file) return message.channel.send("Nemoi ti zovem Elenu..");

  await message.channel.send({files: [
    {
      attachment: file,
      name: file.split("/").pop()
    }
  ]});

  msg.delete();
}

module.exports.help = {
  name: "hej"
}
