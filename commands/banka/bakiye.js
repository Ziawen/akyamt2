const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  let bakim = db.get(`bakim`);
  if(bakim==1){if(message.author.id !== "276245746586484736") if(message.author.id !== "221963543430430720") return message.channel.send(":no_entry_sign: AkyaMT2 Bakımdadır.")}

  let bandurumu = db.get(`${message.author.id}.ban`);
  if(bandurumu==1){return message.channel.send(":no_entry_sign: AkyaMT2'den kalıcı olarak banlandınız!")}
const wone = bot.emojis.find(emoji => emoji.name === "won");
const yange = bot.emojis.find(emoji => emoji.name === "yang");
let user = message.mentions.users.first() || message.author
 const won = db.get(`${user.id}.won`);
 const yang = db.get(`${user.id}.yang`);
      if(!won&&!yang){
     db.set(`${user.id}.won`, 0)
     db.set(`${user.id}.yang`, 0)
              const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`AKYA BANK`, `İsim: ${user.tag}`)
    .addField("Bakiyen : ", `0** ${wone}** 0** ${yange}**`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed) 
    return;
      }
     
     const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`AKYA BANK`, `İsim: ${user.tag}`)
    .addField("Bakiyen : ", `${won}**${wone}** | ${yang}**${yange}**`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
    
    
}