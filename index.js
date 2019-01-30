const botconf = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const token = process.env.token;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let botconfig = require("./botconfig.json");
let xp = require("./xp.json");
let purple = botconfig.purple;




fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Nie udało się załadować komend.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${i}. Komenda ${f} wczytała się pomyślnie!`);
    bot.commands.set(props.help.name, props);
  });
});




bot.on("ready", async () => {
  console.log(`------------------------------------------------------------------------`);
  console.log(`njuBot połączył się pomyślnie! Jest aktualnie online na ${bot.guilds.size} serwerze. :)`);
  console.log(`------------------------------------------------------------------------`);
  bot.user.setActivity("!help");
});

bot.on("guildMemberAdd", function(member){
  let niezwer = member.guild.roles.find(`name`, "niezweryfikowany");
  member.addRole(niezwer);
});

bot.on("guildMemberRemove", function(member){
  let wns = member.guild.channels.find(`name`, "witaj-na-serwerze");
  let nowi = member.guild.channels.find(`name`, "nowi");
  nowi.send(`${member} nas opuścił, jaka szkoda :(`);
  wns.send(`${member} nas opuścił, jaka szkoda :(`);
});




bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

   if(!prefixes[message.guild.id]){
     prefixes[message.guild.id] = {
       prefixes: botconf.prefix
     };
   }

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if(prefix == cmd.slice(0,1)){
   let commandFile = bot.commands.get(cmd.slice(prefix.length));
   if(commandFile) commandFile.run(bot,message,args);
  };
});

bot.on("message", async message => {
  if(message.author.bot) return;
  let nowinka = message.guild.roles.find(`name`, "Nowinka");
  let rozpisany = message.guild.roles.find(`name`, "Rozpisany");
  let sgosc = message.guild.roles.find(`name`, "Stały gość");
  let aktywist = message.guild.roles.find(`name`, "Aktywista");
  let tabelakomendy = ['539022127643361310', '539022143564939264'];
  if(tabelakomendy.includes(message.channel.id)) return;

  let xpAdd = Math.floor(Math.random() * 3) + 1;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 500;
  xp[message.author.id].xp = curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Zdobyłeś kolejny poziom! :arrow_double_up:")
    .setColor(purple)
    .addField("Aktualny poziom:", curlvl + 1);

    message.reply(lvlup);
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) =>{
    if(err) console.log(err)
  });

  if(curlvl == 10){
    message.member.addRole(rozpisany);
    message.member.removeRole(nowinka);
  }

  if(curlvl == 20){
    message.member.addRole(sgosc);
    message.member.removeRole(rozpisany);
  }

  if(curlvl == 35){
    message.member.addRole(aktywist);
    message.member.removeRole(sgosc);
  }
});

bot.login(token);
