const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "521777821442637844", "513328813128810506"){
    message.reply(message.author.avatarURL);
  }
}

module.exports.help = {
  name: "awatar"
}
