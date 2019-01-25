const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "521777821442637844", "513328813128810506"){
    let time = (new Date().getTime() - message.createdTimestamp + "ms");
    message.reply("Pong! " + time);
  }
}

module.exports.help = {
  name: "ping"
}
