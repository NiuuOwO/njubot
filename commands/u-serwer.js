const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id == "539022127643361310" && "539022143564939264"){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Informacje o serwerze**")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nazwa serwera", message.guild.name)
    .addField("Stworzony", message.guild.createdAt)
    .addField("Ilość osób na serwerze", message.guild.memberCount)


    message.channel.send(serverembed);
  }
}

module.exports.help = {
  name: "serwer"
}
