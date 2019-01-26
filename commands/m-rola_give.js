const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");

  let osoba = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let rolapospacji = args.join(" ").slice(22);
  let rola = message.guild.roles.find(`name`, rolapospacji);

  if (!osoba) return message.reply(":thinking: Nie udało mi się znaleźć tej osoby.")
  if (!rolapospacji) return message.reply("Podaj nazwę roli!");
  if (!rola) return message.reply("Nie udało mi się odnaleźć tej roli.");


  let rolaaddembed = new Discord.RichEmbed()
  .setDescription("**Przydzielono role!**")
  .setColor("#c842f4")
  .addField("Kto?", `<@${message.author.id}>. ID ${message.author.id}`)
  .addField("Komu?", osoba)
  .addField("Kiedy?", message.createdAt)
  .addField("Jaka?", rola);

  let rolausunembed = new Discord.RichEmbed()
  .setDescription("**Usunieto role!**")
  .setColor("#5408d8")
  .addField("Kto?", `<@${message.author.id}>. ID ${message.author.id}`)
  .addField("Komu?", osoba)
  .addField("Kiedy?", message.createdAt)
  .addField("Jaka?", rola);


  let logs = message.guild.channels.find(`name`, "logi");
  if(!logs) return message.reply("Nie mogę znaleźć logów.");


  if(osoba.roles.has(rola.id)) {
    osoba.removeRole(rola.id);
    logs.send(rolausunembed);
    message.channel.send(`Usunięto ${osoba} rolę.`);
    return;
  }

  await (osoba.addRole(rola.id));
  message.channel.send(`Przydzielono ${osoba} rolę.`);
  logs.send(rolaaddembed);
}

module.exports.help = {
  name: "rola"
}
