const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args, config) => {
    let user = message.mentions.users.first() || message.author
    let giris = args[0];
    let bagismesaj = args.slice(1).join(' ');

    if(message.author.id !== "276245746586484736") if(message.author.id !== "221963543430430720") return message.channel.send(":no_entry_sign: Bu komutu sadece geliştiriciler kullanabilir!")


    if(!giris){
        const embed = new Discord.RichEmbed()
            .setColor("RED")
            .addField(`AKYAMT2 - Admin Komutları`, `AdminPower kullanma amk yasini!`)
            .addField("Komutlar;\n", `!mt2admin paraekle <Oyuncu> <Won/Yang> <Miktar> \n\n!mt2admin parakaldir <Oyuncu> <Won/Yang> <Miktar>\n\n!mt2admin parasifirla <Oyuncu> <Won/Yang/All>\n\n!mt2admin sifirla <Oyuncu>\n\n!mt2admin ban <Oyuncu>\n\n!mt2admin unban <Oyuncu>\n\n`)
            .setTimestamp()
            message.author.send(embed)
    }

    if(giris == "ban"){
      db.set(`${user.id}.ban`,1);
      const embed = new Discord.RichEmbed()
            .setColor("RED")
            .addField(`AKYAMT2 - Admin Yönetimi`, `Yetkili: ${message.author}`)
            .addField(`Ban Duyurusu;`, `${user} adlı oyuncu AkyaMT2'den banlanmıştır.`)
            .setThumbnail("https://media1.tenor.com/images/de413d89fff5502df7cff9f68b24dca5/tenor.gif")
            .setTimestamp()
            message.channel.send(embed)
    }

    if(giris == "unban"){
      db.set(`${user.id}.ban`,0);
      const embed = new Discord.RichEmbed()
            .setColor("RED")
            .addField(`AKYAMT2 - Admin Yönetimi`, `Yetkili: ${message.author}`)
            .addField(`Unban Duyurusu;`, `${user} adlı oyuncunun banı açılmıştır.`)
            .setThumbnail("https://media.tenor.com/images/b2a1639eaae652da5bea694f6e8cd0c1/tenor.gif")
            .setTimestamp()
            message.channel.send(embed)
    }

    if(giris == "paraekle"){
        const wone = bot.emojis.find(emoji => emoji.name === "won");
        const yange = bot.emojis.find(emoji => emoji.name === "yang");
            let wonoryang = args[2];
            
            if(wonoryang === "won"){
                 const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`AKYA BANK`, `İsim: ${this.Client.fetchUser(kisi)}\nID: ${user.id}`)
            .addField("Won eklendi!", args[3])
            .setThumbnail(user.avatarURL)
            .setTimestamp()
            message.channel.send(embed)
            db.add(`${user.id}.won`, args[3]);
                
            }
            
            if(wonoryang === "yang"){
                 const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`AKYA BANK`, `İsim: ${user}\nID: ${user.id}`)
            .addField("Yang eklendi!", args[3])
            .setThumbnail(user.avatarURL)
            .setTimestamp()
            message.channel.send(embed)
            db.add(`${user.id}.yang`, args[3]);
            }
    }

    if(giris == "parakaldir"){
      const wone = bot.emojis.find(emoji => emoji.name === "won");
      const yange = bot.emojis.find(emoji => emoji.name === "yang");
          let wonoryang = args[2];
          
          if(wonoryang === "won"){
               const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .addField(`AKYA BANK`, `İsim: ${user}\nID: ${user.id}`)
          .addField("Won silindi!", args[3])
          .setThumbnail(user.avatarURL)
          .setTimestamp()
          message.channel.send(embed)
          db.subtract(`${user.id}.won`, args[3]);
              
          }
          
          if(wonoryang === "yang"){
               const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .addField(`AKYA BANK`, `İsim: ${user}\nID: ${user.id}`)
          .addField("Yang silindi!", args[3])
          .setThumbnail(user.avatarURL)
          .setTimestamp()
          message.channel.send(embed)
          db.subtract(`${user.id}.yang`, args[3]);
          }
  }


    if(giris == "sifirla"){
        let user = message.mentions.users.first();
    let kontrol = db.get(`${message.author.id}.eminmisin`);

    if(kontrol=="eminim"){
        const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(`AKYAMT2`, `İsim: ${user.tag}`)
    .addField("İşlem: ", `${message.author.tag} Tarafından ${user.tag} envanteri sıfırlandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed) 
        db.delete(`${user.id}.oltasahipligi`);
     db.set(`${user.id}.inventory.minikbalik`,0);
     db.set(`${user.id}.won` ,0);
     db.set(`${user.id}.yang` ,0);
     db.set(`${user.id}.inventory.hamur`,5);
     db.set(`${user.id}.inventory.solucan`,3);
       db.set(`${user.id}.inventory.zargana`,0);
      db.set(`${user.id}.inventory.ringa`,0);
      db.set(`${user.id}.inventory.tekir`,0);
      db.set(`${user.id}.inventory.somon`,0);
       db.set(`${user.id}.inventory.sudak`,0);
      db.set(`${user.id}.inventory.buyuksudak`,0);
       db.set(`${user.id}.inventory.siyah`,0);
       db.set(`${user.id}.inventory.beyaz`,0);
      db.set(`${user.id}.inventory.kahverengi`,0);
      db.set(`${user.id}.inventory.kirmizi`,0);
       db.set(`${user.id}.inventory.sari`,0);
       db.set(`${user.id}.inventory.boyacikarici`,0);
     db.set(`${user.id}.inventory.binci`,0);
       db.set(`${user.id}.inventory.minci`,0);
     db.set(`${user.id}.inventory.kinci`,0);
       db.set(`${user.id}.inventory.lucyyuzuk`,0);
       db.set(`${user.id}.inventory.altinyuzuk`,0);
       db.set(`${user.id}.inventory.ban`,0);
       db.set(`${user.id}.oltalevel`, 0)
       db.set(`${user.id}.totalbalik`, 0)
       db.set(`${message.author.id}.eminmisin`, "degilim");
    }else{
      db.set(`${message.author.id}.eminmisin`, "eminim");
      const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(`AKYAMT2`, `İsim: ${user.tag}`)
    .addField("İşlem: ", `${user.tag} Adlı kişinin **Envaterini ve Parasını** Sıfırlamak üzeresin işlemi onaylıyorsan: ** !sifirla ${user} yaz! **`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      setTimeout(() => {
        db.set(`${message.author.id}.eminmisin`, "degilim");
    }, 10000)
}
    }


    if(giris == "parasifirla"){

    let wonoryang = args[2];
    
    if(wonoryang === "won"){
         const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`AKYA BANK`, `İsim: ${user}\nID: ${user.id}`)
    .addField("Won Sıfırlandı!", `${message.author} tarafından sıfırlandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
    db.set(`${user.id}.won`, 0);
        
    }
    
    if(wonoryang === "yang"){
         const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`AKYA BANK`, `İsim: ${user}\nID: ${user.id}`)
    .addField("Yang Sıfırlandı!", `${message.author} tarafından sıfırlandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
    db.set(`${user.id}.yang`, 0);
       
    }
    
    if(wonoryang === "all"){
                 const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`AKYA BANK`, `İsim: ${user}\nID: ${user.id}`)
    .addField("Yang ve Won Sıfırlandı!", `${message.author} tarafından sıfırlandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
    db.set(`${user.id}.yang`, 0);
    db.set(`${user.id}.won`, 0);
       
    }
    }

    if(giris == "bakim"){
      let bakimackapat = args[1];
      if(bakimackapat == "ac"){
        db.set(`bakim`,`1`)
        const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .addField(`AkyaMT2 - BAKIM`, `AkyaMT2 ${message.author} Tarafından bakıma alınmıştır!`)
          .setThumbnail(user.avatarURL)
          .setTimestamp()
          message.channel.send(embed)
      }else{
        db.set(`bakim`,`0`)
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(`AkyaMT2 - BAKIM`, `AkyaMT2 ${message.author} Tarafından bakımdan çıkarılmıştır!`)
        .setThumbnail(user.avatarURL)
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    



}