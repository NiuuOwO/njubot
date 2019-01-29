const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "539022127643361310", "539022143564939264"){
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
    let prop = message.guild.channels.find(`name`, "propozycje");
    let main = message.guild.channels.find(`name`, "ogólny");
    let kriejtedat = message.channel;
    if(!args[0]) return message.reply("Nie podano treści!");
    let argsjeden = args.join(" ")
    let argsdwa = args.join(" ")

    let propembed = new Discord.RichEmbed()
    .setColor("#0cf23d")
    .setTitle(`**${argsjeden}**`)
    .setDescription(argsdwa)
    .addField("Autor:", message.author);

    let mainembed = new Discord.RichEmbed()
    .setColor("#0cf23d")
    .addField("Nowa ankieta!", `Na kanale ${kriejtedat} pojawiła się nowa propozycja!`);

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
