const Discord = require('discord.js');

module.exports.run = async (bot, message, args, member) => {
  let niezwer = message.guild.roles.find(`name`, "niezweryfikowany");
  let weryfik = message.guild.channels.find(`name`, "weryfikacja");
  let nowinka = message.guild.roles.find(`name`, "Nowinka");
  let wns = message.guild.channels.find(`name`, "witaj-na-serwerze");
  let dsr = message.guild.channels.find(`name`, "dodaj-sobie-role");
  let main = message.guild.channels.find(`name`, "ogólny");
  let reg = message.guild.channels.find(`name`, "regulamin-informacje");
  let osoba = message.member;

  if(message.channel === weryfik){
    if(!osoba.roles.has(niezwer.id)) return message.delete();
    if(message.member.roles.has(niezwer.id)){
      message.delete();
      osoba.addRole(nowinka)
      osoba.removeRole(niezwer);

      wns.send(`Witaj ${osoba}, widzę że przeszedłeś weryfikację, na początek zapoznaj się z ${reg}ami, następnie ${dsr} i przywitaj się z nami na ${main} :)
http://bit.ly/hejoo
`);
    }
  }
}

module.exports.help = {
  name: "weryfikacja"
}
