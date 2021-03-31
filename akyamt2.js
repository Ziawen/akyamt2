const config = require("./akyaconfig.json");
const botToken = "NzM5NTg5ODA0ODY5NTUwMTUw.Xycqrg.QqosLeOYG6LJTnqRh5crje9nEnE";
const db = require('quick.db')
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(botToken);



bot.on('message', message => {

    if (message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if (message.content.indexOf(config.prefix) !== 0) return;

    try {
        let commandFile = require(`./commands/banka/${command}.js`);
        commandFile.run(bot, message, args, config)
    } catch (err) {
        return;
    }



})



bot.on("ready", () => {

  console.log(`${bot.user.tag} Aktif!`);

  bot.user.setStatus('Online');
  bot.user.setGame("AkyaMT2 - v0.6.2 🗡️", 'https://twitch.tv/ziawenjpg');
});

bot.on("guildCreate", guild => {

  bot.user.setStatus('Online');
  bot.user.setGame("AkyaMT2 - v0.6.2 🗡️", 'https://twitch.tv/ziawenjpg');
});

bot.on("guildDelete", guild => {

  bot.user.setStatus('Online');
  bot.user.setGame("AkyaMT2 - v0.6.2 🗡️", 'https://twitch.tv/ziawenjpg');
});



bot.on("message", async message => {

  if(message.author.bot) return;


  if(message.content.indexOf(config.prefix) !== 0) return;


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();




  
});


//web socket



// connect to gateway

const WS = require('./ws/ws')

const websocketconfig = require('./webconfig.json')


var ws = new WS(websocketconfig.ws.token, websocketconfig.ws.port, bot)



bot.on('message', msg => {
  const t = bot.guilds.get();
  if(t=="446809817407815680"){
    if(msg.content.includes("discord.gg")){
   msg.delete();
   msg.reply("ss") .then(xnxx => {xnxx.delete(5000)})
  }}
});
