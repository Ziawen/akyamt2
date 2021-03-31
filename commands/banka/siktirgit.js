const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {
  let bakim = db.get(`bakim`);
  if(bakim==1){if(message.author.id !== "276245746586484736") if(message.author.id !== "221963543430430720") return message.channel.send(":no_entry_sign: AkyaMT2 Bakımdadır.")}

    let bansayi = db.get(`${message.author.id}.inventory.ban`);

    if(!bansayi) return message.channel.send('LAN HAKKIN YOK İBNE')


    

    const member = message.mentions.members.first();

    if(!member)
      return message.channel.send("Kurbanını seç! Kalan Ban Hakkı = "+bansayi);
    if(!member.bannable) 
      return message.channel.send("SEÇTİĞİN KİŞİ ALLAH ÇIKTI ONU BANLAYAMAZSIN");
    
      



      await member.ban()
      .catch(error => message.channel.send(`ayça22 oturum açtı.`));
      db.subtract(`${message.author.id}.inventory.ban`, 1)
    message.channel.send(`⚠️ ${message.author.tag} **1 BAN HAKKINI** Kullanarak ${member.user.tag}, Adlı Kişiyi **BANLANDI**. ⚠️ (Kalan Ban Hakkı = ${bansayi})`);
    
  }
