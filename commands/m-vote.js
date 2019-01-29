const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "539022127643361310", "539022143564939264"){
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
    let prop = message.guild.channels.find(`name`, "ankiety");
    let main = message.guild.channels.find(`name`, "ogólny");
    if(!args[0]) return message.reply("Nie podano treści!");

    let propembed = new Discord.RichEmbed()
    .setColor("#0cf23d")
    .setTitle(`**ANKIETA!**`)
    .setDescription(args[0])

    let mainembed = new Discord.RichEmbed()
    .setColor("#0cf23d")
    .addField("Nowa ankieta!", `Na kanale ${prop} pojawiła się nowa propozycja!`);

    message.reply("Wysłano propozycję!");
    main.send(mainembed);
    let sentMessage = await prop.send(propembed)
    await sentMessage.react("👍");
    await sentMessage.react("👎");
  }
}

module.exports.help = {
  name: "vote"
}
