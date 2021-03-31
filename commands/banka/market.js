const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args, config) => {
  let bakim = db.get(`bakim`);
  if(bakim==1){if(message.author.id !== "276245746586484736") if(message.author.id !== "221963543430430720") return message.channel.send(":no_entry_sign: AkyaMT2 Bakımdadır.")}


  let bandurumu = db.get(`${message.author.id}.ban`);
  if(bandurumu==1){return message.channel.send(":no_entry_sign: AkyaMT2'den kalıcı olarak banlandınız!")}
  const hamure = bot.emojis.find(emoji => emoji.name === "Hamur");
  const solucane = bot.emojis.find(emoji => emoji.name === "Solucan");
  const wone = bot.emojis.find(emoji => emoji.name === "won");
  const yange = bot.emojis.find(emoji => emoji.name === "yang");
  const minikbalike = bot.emojis.find(emoji => emoji.name === "Minikbalk");

  const bane = bot.emojis.find(emoji => emoji.name === "ban");
let user = message.mentions.users.first() || message.author
       let author = db.fetch(`${message.author.id}.yang`)
       let giris = args[0];
       let esya = args[1];
       let adet = args[2];
       let hamur = db.get(`${message.author.id}.inventory.hamur`);
       let solucan = db.get(`${message.author.id}.inventory.solucan`)
       let bansayi = db.get(`${message.author.id}.inventory.ban`);
       let minik_balik = db.get(`${message.author.id}.inventory.minikbalik`);
      
       if(adet == 0){message.channel.send("Geçerli bir miktar giriniz!"); return;}




       if(!giris){
        const embed = new Discord.RichEmbed()
       .setColor("ORANGE")
       .addField(":fishing_pole_and_fish:  | Market", `\n${hamure} | Hamur : 1000 ${yange}\n${solucane} | Solucan : 3000 ${yange}\n${minikbalike} | Minik Balık : 250K ${yange}(Min 50)\n${bane} | Ban Hakkı : 1 ${wone} / 100M ${yange} \n\n **Satın Almak İçin; !market satinal < eşya > < adet >**`)
       .setTimestamp()
       message.channel.send(embed)
       return;
      }



    if(giris == 'satinal'){

      if(!adet){adet=1;}

      if(esya == "minikbalik"){
        if(adet<50){
          const embed = new Discord.RichEmbed()
          .setColor("RED")
          .addField(":fishing_pole_and_fish:  | Market", `Minimum **50** tane ${minikbalike} **Minik Balık** satın alabilirsin!`)
          .setTimestamp()
          message.channel.send(embed)
          return;
        }
      }
      var fiyathamur = 1000*adet;
      var fiyatsolucan = 3000*adet;
      var fiyatminikbalik = 5000*adet;
      var fiyatban = 100000000;
      if(esya == "hamur"){
        if (author < fiyathamur){
          const embed = new Discord.RichEmbed()
          .setColor("RED")
          .addField(":fishing_pole_and_fish:  | Market", `**${adet}** Adet ${hamure} **Hamur** alabilmek için **${fiyathamur}** ${yange} gerekir!`)
          .setTimestamp()
          message.channel.send(embed)
          return;
        }
          else{
        db.subtract(`${message.author.id}.yang`, fiyathamur);
        db.add(`${message.author.id}.inventory.hamur`, adet);
      const embed = new Discord.RichEmbed()
      .setColor("ORANGE")
       .addField(`AkyaMT2`, `${user.tag}`)
      .addField(":fishing_pole_and_fish:  | Market", `**${adet}** Adet **Hamur** Satın alındı.`)
      .setTimestamp()
      message.channel.send(embed)
    }
    }


    if(esya == "minikbalik"){
      if (author < fiyatminikbalik){
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .addField(":fishing_pole_and_fish:  | Market", `**${adet}** Adet ${hamure} **Hamur** alabilmek için **${fiyatminikbalik}** ${yange} gerekir!`)
        .setTimestamp()
        message.channel.send(embed)
        return;
      }
        else{
      db.subtract(`${message.author.id}.yang`, fiyatminikbalik);
      db.add(`${message.author.id}.inventory.minikbalik`, adet);
    const embed = new Discord.RichEmbed()
    .setColor("ORANGE")
     .addField(`AkyaMT2`, `${user.tag}`)
    .addField(":fishing_pole_and_fish:  | Market", `**${adet}** Adet **Minik Balık** Satın alındı.`)
    .setTimestamp()
    message.channel.send(embed)
  }
  }


      if(esya == "solucan"){
        if (author < fiyatsolucan){
          const embed = new Discord.RichEmbed()
          .setColor("RED")
          .addField(":fishing_pole_and_fish:  | Market", `**${adet}** Adet ${solucane} **Solucan** alabilmek için **${fiyatsolucan}** ${yange} gerekir!`)
          .setTimestamp()
          message.channel.send(embed)
          return;
        }
         db.subtract(`${message.author.id}.yang`, fiyatsolucan);
          db.add(`${message.author.id}.inventory.solucan`, adet)
      const embed = new Discord.RichEmbed()
      .setColor("ORANGE")
       .addField(`AkyaMT2`, `${user.tag}`)
      .addField(":fishing_pole_and_fish:  | Market", `**${adet}** Adet **Solucan** Satın alındı.`)
      .setTimestamp()
      message.channel.send(embed)
    }

    if(esya == "banhakki"){
      if (author < fiyatban){
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .addField(":fishing_pole_and_fish:  | Market", `**${adet}** Adet ${bane} **BAN HAKKI** alabilmek için **1 ${wone}** ya da **100M** ${yange} gerekir!`)
        .setTimestamp()
        message.channel.send(embed)
        return;
      }
         db.subtract(`${message.author.id}.yang`, fiyatban);
          db.add(`${message.author.id}.inventory.ban`, 1)
      const embed = new Discord.RichEmbed()
      .setColor("ORANGE")
       .addField(`AkyaMT2`, `${user.tag}`)
      .addField(":fishing_pole_and_fish:  | Market", ` ⚠️ **1** Adet **BAN HAKKI** Satın alındı. ⚠️ `)
      .setTimestamp()
      message.channel.send(embed)
    }

    }












}
