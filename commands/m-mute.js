const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
  let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!osoba) return message.reply(":thinking: Nie udało mi się znaleźć tej osoby.");
  if(osoba.hasPermission("MANAGE_MESSAGES")) return message.reply("Chyba nie wyciszysz moderatora, prawda? >:)");
  let czas = args[1];
  if(!czas) return message.reply("Podaj czas!");
  let powod = args.slice(2).join(" ");
  if(!powod) return message.reply("Podaj powód!");

  let rolamute = message.guild.roles.find(`name`, "Softban");

    await osoba.send(`Zostałeś wyciszony na ${czas}.
Powód: ${powod}`)

    message.channel.send(`${osoba} został/a wyciszony/a na ${czas}.`)

  let muteembed = new Discord.RichEmbed()
  .setDescription(`**NOWY MUTE!**`)
  .setColor(orange)
  .addField("Kto?", osoba)
  .addField("Przez kogo?", message.author)
  .addField("Gdzie?", message.channel)
  .addField("Kiedy?", message.createdAt)
  .addField("Na jak długo?", czas)
  .addField("Dlaczego?", powod);

  let logs = message.guild.channels.find(`name`, "logi");
  if(!logs) return message.reply("Nie mogę znaleźć logów.");
  logs.send(muteembed);

  await(osoba.addRole(rolamute.id));

  setTimeout(function(){
    osoba.removeRole(rolamute.id);
    logs.send(`<@${osoba.id}> został odciszony!`);
    osoba.send("Zostałeś odciszony!");
  }, ms(czas));

}

module.exports.help = {
  name: "mute"
}
