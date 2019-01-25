const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
  let rolapospacji = args.join(" ");
  if (!rolapospacji) return message.reply("Podaj nazwę roli!");
  let rola = message.guild.roles.find(`name`, rolapospacji);
  if (!rola) return message.reply("Nie udało mi się odnaleźć tej roli.");
  let rlogi = message.guild.channels.find(`name`, "logi-role");

  message.reply("Odblokowano!").then(msg => msg.delete(1000));
  rola.edit({ mentionable: true })
  message.delete();

  let unlockembed = new Discord.RichEmbed()
  .setColor("#42f49e")
  .addField("**Odblokowano! pingowanie roli**", `${rola}`)
  .addField("Kto?", message.author);
  rlogi.send(unlockembed);

  return;
}

module.exports.help = {
  name: "unlockrole"
}
