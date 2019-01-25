const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "521777821442637844", "513328813128810506"){
    let prop = message.guild.channels.find(`name`, "propozycje");
    let main = message.guild.channels.find(`name`, "main");
    if(!args[0]) return message.reply("Nie podano treści!");

    let propembed = new Discord.RichEmbed()
    .setColor("#0cf23d")
    .setTitle("**NOWA PROPOZYCJA!**")
    .setDescription(args[0])
    .addField("Autor:", message.author);

    let mainembed = new Discord.RichEmbed()
    .setColor("#0cf23d")
    .addField("Nowa propozycja!", `Na kanale ${prop} pojawiła się nowa propozycja!`);

    message.reply("Wysłano propozycję!");
    main.send(mainembed);
    let sentMessage = await prop.send(propembed)
    await sentMessage.react("👍");
    await sentMessage.react("👎");
  }
}

module.exports.help = {
  name: "propozycja"
}
