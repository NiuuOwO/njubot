const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "539022127643361310", "539022143564939264"){
    let time = (new Date().getTime() - message.createdTimestamp + "ms");
    message.reply("Pong! " + time);
  }
}

module.exports.help = {
  name: "ping"
}
