const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const everyoneRole  = message.guild.defaultRole;
  if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)"); //No permissions.
  if(message.member.hasPermission("MANAGE_EMOJIS")){ message.reply("Odkryto kanał!"); } //It blocks ability to send messages on channel that the comamnd was sent.
  message.channel.overwritePermissions(everyoneRole, {
      READ_MESSAGES: true
    })
    .catch(console.error);
}

module.exports.help = {
  name: "chatshow"
}
