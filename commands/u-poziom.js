const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 500;
  let difference = nxtLvlXp - curxp;


  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(purple)
  .addField("Aktualny poziom", curlvl, true)
  .addField("Aktualny EXP", curxp, true)
  .setFooter(`Do następnego poziomu brakuje ci ${difference} expa.`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed);
}

module.exports.help = {
  name: "poziom"
}
