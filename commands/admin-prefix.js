const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, prefix) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Nie nie nie! :)");
  if(!args[0]) return message.reply("Podaj nowy prefix!");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Nowy prefix!")
  .setDescription(`Ustawiony jako ${args[0]}`);

  message.channel.send(sEmbed);
}

module.exports.help = {
  name: "prefix"
}
