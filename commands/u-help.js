const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "539022127643361310", "539022143564939264"){
    let user = message.author;

    let hmembed = new Discord.RichEmbed()
    .setDescription("**Lista komend dla moderatora**")
    .setColor("#47e5bb")
    .addField("!ban [@Użytkownik] [Powód]*", 'Banuje użytkownika.')
    .addField("!kick [@Użytkownik] [Powód]", 'Wyrzuca użytkownika.')
    .addField("!mute [@Użytkownik] [1s/m/h/d] [Powód]", 'Wycisza gracza na x czasu.')
    .addField("!updateroles", 'Aktualizuję uprawnienia ról: Softban i niezweryfikowany.')
    .addField("!cl [ilość]", 'Wyczyszcza x wiadomości.')
    .addField("!chaton*", 'Włącza wszystkim możliwość pisania na kanale.')
    .addField("!chatoff*", 'Wyłącza wszystkim możliwość pisania na kanale.')
    .addField("!chatshow**", 'Odkrywa dla wszystkich kanał.')
    .addField("!chathide**", 'Ukrywa dla wszystkich kanał.')
    .addField("!unlockrole [ROLA]*", `Odblokowuje pingowanie roli.`)
    .addField("!lockrole [ROLA]*", `Zablokowuje pingowanie roli.`)
    .addField("!roleping [ROLA]*", `Wysyła ping roli.`)
    .addField("!rola [@Użytkownik] [ROLA]", `Daje uzytkownikowi rolę.`)
    .addField("UPRAWNIENIA", `* - Komenda dla moderatora i starszego moderatora.
  ** - komenda dla starszego moderatora.`);

    let admmembed = new Discord.RichEmbed()
    .setDescription("**LISTA WSZYSTKICH KOMEND**")
    .setColor("#47e5bb")
    .addField("!help", 'Wyświetla listę komend.')
    .addField("!serwer", 'Wyświetla informacje o sewerze.')
    .addField("!bot", 'Wyświetla informacje o njuBocie.')
    .addField("!ping", 'Pokazuję opóźnienie bota.')
    .addField("!zapro", 'Wysyła treść zaproszenia.')
    .addField("!awatar", 'Pokazuje twój awatar.')
    .addField("!propozycja", 'Wysyła propozycję na kanał #propozycje.')
    .addField("KOMENDY MODERATORA", `↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓`)
    .addField("!ban [@Użytkownik] [Powód]*", 'Banuje użytkownika.')
    .addField("!kick [@Użytkownik] [Powód]", 'Wyrzuca użytkownika.')
    .addField("!mute [@Użytkownik] [1s/m/h/d] [Powód]", 'Wycisza gracza na x czasu.')
    .addField("!updateroles", 'Aktualizuję uprawnienia ról: Softban i niezweryfikowany.')
    .addField("!cl [ilość]", 'Wyczyszcza x wiadomości.')
    .addField("!chaton*", 'Włącza wszystkim możliwość pisania na kanale.')
    .addField("!chatoff*", 'Wyłącza wszystkim możliwość pisania na kanale.')
    .addField("!chatshow**", 'Odkrywa dla wszystkich kanał.')
    .addField("!chathide**", 'Ukrywa dla wszystkich kanał.')
    .addField("!unlockrole [ROLA]*", `Odblokowuje pingowanie roli.`)
    .addField("!lockrole [ROLA]*", `Zablokowuje pingowanie roli.`)
    .addField("!roleping [ROLA]*", `Wysyła ping roli.`)
    .addField("!rola [@Użytkownik] [ROLA]", `Daje uzytkownikowi rolę.`)
    .addField("UPRAWNIENIA", `* - Komenda dla moderatora i starszego moderatora.
  ** - komenda dla starszego moderatora.`);

    let hembed = new Discord.RichEmbed()
    .setDescription("**Lista komend**")
    .setColor("#64e547")
    .addField("!help", 'Wyświetla listę komend.')
    .addField("!serwer", 'Wyświetla informacje o sewerze.')
    .addField("!bot", 'Wyświetla informacje o njuBocie.')
    .addField("!ping", 'Pokazuję opóźnienie bota.')
    .addField("!zapro", 'Wysyła treść zaproszenia.')
    .addField("!awatar", 'Pokazuje twój awatar.')
    .addField("!propozycja", 'Wysyła propozycję na kanał #propozycje.');


    if(!args[0]){
      user.send(hembed);
      message.channel.send(":tada:");
    }

    if(args[0] === "mode"){
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("DING DONG! Nie masz uprawnień aby użyć tą komendę. Pozdrawiam ;)");
      user.send(hmembed);
      message.channel.send(":tada:");
    }

    if(args[0] === "admin"){
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      user.send(admmembed);
      return message.delete().catch();
    }
  }
}

module.exports.help = {
  name: "help"
}
