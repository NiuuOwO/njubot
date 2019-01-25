const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let mentionUser = message.mentions.users.first();
  let bUser = message.guild.members.get(mentionUser ? mentionUser.id : message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
  if(!bUser) return message.reply(":thinking: Nie udało mi się znaleźć tej osoby.");
  let bReason = args.join(" ").slice(22);
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Chyba nie **zbanujesz** moderatora... A po co mógłbyś to zrobić? >:))");
  if(!bReason) return message.reply("Podaj powód!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#bc0000")
  .addField("Kto?", `${bUser}. ID ${bUser.id}`)
  .addField("Przez kogo?", `<@${message.author.id}>. ID ${message.author.id}`)
  .addField("Na jakim kanale?", message.channel)
  .addField("Kiedy?", message.createdAt)
  .addField("Dlaczego?", bReason);

  let logskbm = message.guild.channels.find(`name`, "logi-kbm");
  if(!logskbm) return message.reply("Nie mogę znaleźć logów.");

  message.guild.member(bUser).ban(bReason)
  logskbm.send(banEmbed);
  message.channel.send(":ok_hand:");

  return;
}

module.exports.help = {
  name: "ban"
}
