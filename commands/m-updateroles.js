const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
  if(message.member.hasPermission("MANAGE_MESSAGES")) { message.reply("Zaktualizowano pomyślnie!"); message.delete(); }

  let niezwer = message.guild.roles.find(`name`, "niezweryfikowany");
  let weryfik = message.guild.channels.find(`name`, "weryfikacja");
  let sb = message.guild.roles.find(`name`, "Softban");

  let reg = message.guild.channels.find(`name`, "regulamin");


    message.guild.channels.forEach(async (channel, id) => { //Zmienia uprawnienia niezweryfikowanego na wszystkich kanałach
          await channel.overwritePermissions(niezwer.id, {
            READ_MESSAGES: false
          })
        });
    message.guild.channels.forEach(async (channel, id) => { //Zmienia uprawnienia softban na wszystkich kanałach
          await channel.overwritePermissions(sb.id, {
            SEND_MESSAGES: false,
            SPEAK: false,
            CONNECT: true
          })
        });
    weryfik.overwritePermissions(niezwer.id, {
      READ_MESSAGES: true
    })
    reg.overwritePermissions(niezwer.id, {
      READ_MESSAGES: true,
      SEND_MESSAGES: false
    })
}

module.exports.help = {
  name: "updateroles"
}
