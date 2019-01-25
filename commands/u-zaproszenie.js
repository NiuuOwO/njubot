const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "521777821442637844", "513328813128810506"){
    message.author.send(`czil zołn | strefa czilu
wbijaj mordo mordunio
-autorski bot
-nie gryziemy
no i tyle :fire:

https://discord.gg/WwnAZnq`);

    return message.channel.send(":tada:");
  }
}

module.exports.help = {
  name: "zapro"
}
