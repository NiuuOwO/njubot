const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "539022127643361310", "539022143564939264"){
    message.reply(message.author.avatarURL);
  }
}

module.exports.help = {
  name: "awatar"
}
