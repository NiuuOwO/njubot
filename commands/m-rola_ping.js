const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
  let rolapospacji = args.join(" ");
  if (!rolapospacji) return message.reply("Podaj nazwę roli!");
  let rola = message.guild.roles.find(`name`, rolapospacji);
  if (!rola) return message.reply("Nie udało mi się odnaleźć tej roli.");

  message.delete();
  rola.edit({ mentionable: true })
  message.channel.send(`${rola}`);
  rola.edit({ mentionable: false })
  return;
}

module.exports.help = {
  name: "roleping"
}
