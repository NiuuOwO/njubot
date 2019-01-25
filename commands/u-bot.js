const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "521777821442637844", "513328813128810506"){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Informacje o njuBocie**")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nazwa bota", bot.user.username)
    .addField("Stworzony", bot.user.createdAt)
    .addField("Ilość komend", '23')
    .addField("Biblioteka", 'discord.js');

    return message.channel.send(botembed);
  }
}

module.exports.help = {
  name: "bot"
}
