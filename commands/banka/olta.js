const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args, config) => {
    let user = message.author; 
    let giris = args[0];
    if(message.author.id == "276245746586484736") {user = message.mentions.users.first() || message.author; }
    if(message.author.id == "221963543430430720") {user = message.mentions.users.first() || message.author; }
    let totalbalik = db.get(`${user.id}.totalbalik`)
    let oltalevel = db.get(`${user.id}.oltalevel`)
    let oltalevelhazir = db.get(`${user.id}.oltalevelhazir`)
    let minik_balik = db.get(`${message.author.id}.inventory.minikbalik`);
    const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  
   .addField(`Olta Bilgileri - ${user.tag}`,`Olta Leveli : ${oltalevel}\nTutulan Balık : ${totalbalik}`)
   .setThumbnail("https://cdn.discordapp.com/attachments/749396982409199686/752611939313516586/Olta.png")
  .setTimestamp()
  message.channel.send(embed)




  if(giris=="yukselt"){


    if(oltalevelhazir=="1"){
      if(oltalevel == "1"){message.channel.send("mal git balık tut"); return;}

    if(minik_balik==5 || minik_balik>=5){
        message.channel.send("lalalalal siktim oltan 1 level hahaha mal");
        db.set(`${user.id}.oltalevel`,1);
    }



  }


  }
}