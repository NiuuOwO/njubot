const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "521777821442637844", "513328813128810506"){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Informacje o serwerze**")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nazwa serwera", message.guild.name)
    .addField("Stworzony", message.guild.createdAt)
    .addField("Ilość osób na serwerze", message.guild.memberCount)


    return message.channel.send(serverembed);
  }
}

module.exports.help = {
  name: "serwer"
}
