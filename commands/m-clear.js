const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
  if(!args[0]) return message.channel.send("Podaj ilość!");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:ok_hand: ${args[0]}`).then(msg => msg.delete(3000));
  });

  let clearembed = new Discord.RichEmbed()
  .setDescription("**Wyczyszczono wiadomości!**")
  .setColor("#fbff11")
  .addField("Kto?", `<@${message.author.id}>. ID ${message.author.id}`)
  .addField("Na jakim kanale?", message.channel)
  .addField("Kiedy?", message.createdAt)
  .addField("Ile?", `${args[0]}`);

  let logs = message.guild.channels.find(`name`, "logi");
  if(!logs) return message.reply("Nie mogę znaleźć logów.");

  logs.send(clearembed);
}

module.exports.help = {
  name: "cl"
}
