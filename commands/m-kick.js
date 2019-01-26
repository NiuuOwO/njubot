const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kicked = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("DING, DONG! Nie posiadasz uprawnień do używania tej komendy. Pozdrawiam ;)");
  if(!kicked) return message.reply(":thinking: Nie udało mi się znaleźć tej osoby.");
  let powod = args.join(" ").slice(22);
  if(!powod) return message.reply("Podaj powód!");
  if(kicked.hasPermission("MANAGE_MESSAGES")) return message.reply("Chyba nie wyrzucisz moderatora, prawda? >:)");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#e56b00")
  .addField("Kto?", `${kicked}. ID ${kicked.id}`)
  .addField("Przez kogo?", `<@${message.author.id}>. ID ${message.author.id}`)
  .addField("Na jakim kanale?", message.channel)
  .addField("Kiedy?", message.createdAt)
  .addField("Dlaczego?", powod);

  let logs = message.guild.channels.find(`name`, "logi");
  if(!logs) return message.reply("Nie można znaleźć logów.");

  message.guild.member(kicked).kick(powod);
  logs.send(kickEmbed);
  message.channel.send(`:ok_hand:`);
  kicked.send(`Zostałeś wyrzucony przez ${message.author}. Powód: ${powod}`);

  return;
}

module.exports.help = {
  name: "kick"
}
