const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const everyoneRole  = message.guild.defaultRole;
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)"); //No permissions.
  if(message.member.hasPermission("MANAGE_CHANNELS")){ message.reply("Zablokowano możliwość pisania na tym kanale!"); } //It blocks ability to send messages on channel that the comamnd was sent.
  message.channel.overwritePermissions(everyoneRole, {
      SEND_MESSAGES: false
    })
    .catch(console.error);
}

module.exports.help = {
  name: "chatoff"
}
