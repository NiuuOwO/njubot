const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "539022127643361310", "539022143564939264"){
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
