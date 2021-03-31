const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args, config) => {
  let bakim = db.get(`bakim`);
  if(bakim==1){if(message.author.id !== "276245746586484736") if(message.author.id !== "221963543430430720") return message.channel.send(":no_entry_sign: AkyaMT2 Bakımdadır.")}

  let bandurumu = db.get(`${message.author.id}.ban`);
  if(bandurumu==1){return message.channel.send(":no_entry_sign: AkyaMT2'den kalıcı olarak banlandınız!")}
    let user = message.mentions.users.first() || message.author
    let kontrol = db.get(`${message.author.id}.oltasahipligi`);

    if(kontrol=="allahvar2"){
        message.reply("Zaten oltaya sahipsin!");
    }else{
      const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`AKYAMT2`, `İsim: ${user.tag}`)
    .addField("Çantana eklendi: ", `Olta`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed) 
        db.set(`${message.author.id}.oltasahipligi`,"allahvar2");
     db.set(`${message.author.id}.inventory.minikbalik`,0);
     db.set(`${message.author.id}.won` ,0);
     db.set(`${message.author.id}.yang` ,0);
     db.set(`${message.author.id}.inventory.hamur`,5);
     db.set(`${message.author.id}.inventory.solucan`,3);
       db.set(`${message.author.id}.inventory.zargana`,0);
      db.set(`${message.author.id}.inventory.ringa`,0);
      db.set(`${message.author.id}.inventory.tekir`,0);
      db.set(`${message.author.id}.inventory.somon`,0);
       db.set(`${message.author.id}.inventory.sudak`,0);
      db.set(`${message.author.id}.inventory.buyuksudak`,0);
       db.set(`${message.author.id}.inventory.siyah`,0);
       db.set(`${message.author.id}.inventory.beyaz`,0);
      db.set(`${message.author.id}.inventory.kahverengi`,0);
      db.set(`${message.author.id}.inventory.kirmizi`,0);
       db.set(`${message.author.id}.inventory.sari`,0);
       db.set(`${message.author.id}.inventory.boyacikarici`,0);
     db.set(`${message.author.id}.inventory.binci`,0);
       db.set(`${message.author.id}.inventory.minci`,0);
     db.set(`${message.author.id}.inventory.kinci`,0);
       db.set(`${message.author.id}.inventory.lucyyuzuk`,0);
       db.set(`${message.author.id}.inventory.altinyuzuk`,0);
       db.set(`${message.author.id}.inventory.ban`,0);
       db.set(`${message.author.id}.oltalevel`, 0)
       db.set(`${message.author.id}.totalbalik`, 0)
}

}