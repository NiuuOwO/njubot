const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
  if(message.member.hasPermission("MANAGE_EMOJIS")){
    if(!args[0]){ message.author.send("!chatdelete yes")  }
    if(args[0] === "yes"){
      message.author.send("Usunięto kanał!");
      message.channel.delete()
      return;
    }
  }
}

module.exports.help = {
  name: "chatdelete"
}
