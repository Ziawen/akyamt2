const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args, config) => {
  let bakim = db.get(`bakim`);
  if(bakim==1){if(message.author.id !== "276245746586484736") if(message.author.id !== "221963543430430720") return message.channel.send(":no_entry_sign: AkyaMT2 Bakımdadır.")}

    let bandurumu = db.get(`${message.author.id}.ban`);
    if(bandurumu==1){return message.channel.send(":no_entry_sign: AkyaMT2'den kalıcı olarak banlandınız!")}

    let kontrol = db.get(`${message.author.id}.oltasahipligi`);

    let user = message.mentions.users.first() 

    if(!kontrol){
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Bilgilendirme:", `Balık tutmak için oltaya ihtiyacınız var **!oltaal** .`)
      .setTimestamp()
      message.channel.send(embed) 
    return;    
  }

  let authormoneyyang = db.get(`${message.author.id}.yang`);
  let authormoneywon = db.get(`${message.author.id}.won`);



  let input = args[2];

  let yangorwon = args[1];
  if (input.includes('-')) {message.channel.send("Negatif bir değer giremezsin!"); return;}
  if(input == 0){message.channel.send("Geçerli bir miktar giriniz!"); return;}
  if(yangorwon == "yang"){

    if(authormoneyyang >= input ){
        if(authormoneyyang < input){message.channel.send("Yeterli yang yok!"); return;}
        db.subtract(`${message.author.id}.yang`,input);
        db.add(`${user.id}.yang`, input)
        const embed = new Discord.RichEmbed()
        .setColor("ORANGE")
        .addField("AkyaMT2 | Yang Transferi", `**Gönderen:** ${message.author}\n\n**Alıcı:** ${user}\n\n**Miktar:** ${input} Yang`)
        .setTimestamp()
        message.channel.send(embed)
    
    
      }else{message.channel.send("yarra");};

  }else if(yangorwon == "won"){
    
    if(authormoneywon >= input ){
      if(authormoneywon < input){message.channel.send("Yeterli won yok!"); return;}
      db.subtract(`${message.author.id}.won`,input);
      db.add(`${user.id}.won`, input)
      const embed = new Discord.RichEmbed()
      .setColor("ORANGE")
      .addField("AkyaMT2 | Won Transferi", `**Gönderen:** ${message.author}\n\n**Alıcı:** ${user}\n\n**Miktar:** ${input} Won`)
      .setTimestamp()
      message.channel.send(embed)
  
  
    }else{message.channel.send("yarra");};
    

  }


  

  



}