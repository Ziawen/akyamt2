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
const tekire = bot.emojis.find(emoji => emoji.name === "Tekir");
const lucyninyuzugue = bot.emojis.find(emoji => emoji.name === "Lucyninyz");
const Somone = bot.emojis.find(emoji => emoji.name === "Somon");
const Byksudake = bot.emojis.find(emoji => emoji.name === "Byksudak");
const sudake = bot.emojis.find(emoji => emoji.name === "Sudak");
const siyahboyae = bot.emojis.find(emoji => emoji.name === "Siyahsaboyas");
const kahverengiboyae = bot.emojis.find(emoji => emoji.name === "Kahverengisaboyas");
const beyazboyae = bot.emojis.find(emoji => emoji.name === "Beyazsaboyas");
const boyacikaricie = bot.emojis.find(emoji => emoji.name === "boycikarici");
const kirmiziboyae = bot.emojis.find(emoji => emoji.name === "Krmzsaboyas");
const Sariboyae = bot.emojis.find(emoji => emoji.name === "Sarsaboyas");
const Zarganae = bot.emojis.find(emoji => emoji.name === "Zargana");
const kirmiziie = bot.emojis.find(emoji => emoji.name === "kirmizi");
const maviie = bot.emojis.find(emoji => emoji.name === "mavi");
const beyazie = bot.emojis.find(emoji => emoji.name === "beyaz");
const altinyuzuke = bot.emojis.find(emoji => emoji.name === "Altnyzk");
const ringae = bot.emojis.find(emoji => emoji.name === "Ringa");
let user = message.mentions.users.first() || message.author
       let author = db.fetch(`${message.author.id}.yang`)
       let giris = args[0];
       let esya = args[1];
       let hamuryazi = "";
       let solucanyazi = "";
       let minikbalikyazi = "";
       let zarganayazi = "";
       let tekiryazi = "";
       let ringayazi = "";
       let somonyazi = "";
       let sudakyazi = "";
       let buyuksudakyazi = "";
       let siyahyazi = "";
       let beyazyazi = "";
       let kahverengiyazi = "";
       let kirmiziyazi = "";
       let sariyazi = "";
       let boyacikariciyazi = "";
       let binciyazi = "";
       let minciyazi = "";
       let kinciyazi = "";
       let lucyyuzukyazi = "";
       let altinyuzukyazi = "";


/* VERITABANI TANIMLAMA */
       
       let hamur = db.get(`${message.author.id}.inventory.hamur`);
       let solucan = db.get(`${message.author.id}.inventory.solucan`);
       let minik_balik = db.get(`${message.author.id}.inventory.minikbalik`);
       let zargana = db.get(`${message.author.id}.inventory.zargana`);
       let tekir = db.get(`${message.author.id}.inventory.tekir`);
       let ringa = db.get(`${message.author.id}.inventory.ringa`);
       let somon = db.get(`${message.author.id}.inventory.somon`);
       let sudak = db.get(`${message.author.id}.inventory.sudak`);
       let buyuk_sudak = db.get(`${message.author.id}.inventory.buyuksudak`);
       let siyah = db.get(`${message.author.id}.inventory.siyah`);
       let beyaz = db.get(`${message.author.id}.inventory.beyaz`);
       let kahverengi = db.get(`${message.author.id}.inventory.kahverengi`);
       let kirmizi = db.get(`${message.author.id}.inventory.kirmizi`);
       let sari = db.get(`${message.author.id}.inventory.sari`);
       let boyacikarici = db.get(`${message.author.id}.inventory.boyacikarici`);
       let binci = db.get(`${message.author.id}.inventory.binci`);
       let minci = db.get(`${message.author.id}.inventory.minci`);
       let kinci = db.get(`${message.author.id}.inventory.kinci`);
       let lucyyuzuk = db.get(`${message.author.id}.inventory.lucyyuzuk`);
       let altinyuzuk = db.get(`${message.author.id}.inventory.altinyuzuk`);
/* VERITABANI TANIMLAMA */


/* ENVANTER YAZI */
      if(hamur>0){hamuryazi = `${hamure} | Hamur : ${hamur} \n`;}else{hamuryazi = " ";}
      if(solucan>0){solucanyazi = ` ${solucane} | Solucan : ${solucan} \n`;}else{solucanyazi = " ";}
      if(minik_balik>0){minikbalikyazi = ` ${minikbalike} | Minik Balık : ${minik_balik} \n`;}else{minikbalikyazi = " ";}
      if(zargana>0){zarganayazi = ` ${Zarganae} | Zargana : ${zargana} \n`;}else{zarganayazi = " ";}
      if(tekir>0){tekiryazi = ` ${tekire} | Tekir : ${tekir} \n`;}else{tekiryazi = " ";}
      if(ringa>0){ringayazi = ` ${ringae} | Ringa : ${ringa} \n`;}else{ringayazi = " ";}
      if(somon>0){somonyazi = ` ${Somone} | Somon : ${somon} \n`;}else{somonyazi = " ";}
      if(sudak>0){sudakyazi = ` ${sudake} | Sudak : ${sudak} \n`;}else{sudakyazi = " ";}
      if(buyuk_sudak>0){buyuksudakyazi = ` ${Byksudake} | Büyük Sudak : ${buyuk_sudak} \n`;}else{buyuksudakyazi = " ";}
      if(siyah>0){siyahyazi = ` ${siyahboyae} | Siyah Boya : ${siyah} \n`;}else{siyahyazi = " ";}
      if(beyaz>0){beyazyazi = ` ${beyazboyae} | Beyaz Boya : ${beyaz} \n`;}else{beyazyazi = " ";}
      if(kahverengi>0){kahverengiyazi = ` ${kahverengiboyae} | Kahverengi Boya : ${kahverengi} \n`;}else{kahverengiyazi = " ";}
      if(kirmizi>0){kirmiziyazi = ` ${kirmiziboyae} | Kırmızı Boya : ${kirmizi} \n`;}else{kirmiziyazi = " ";}
      if(sari>0){sariyazi = ` ${Sariboyae} | Sarı Boya : ${sari} \n`;}else{sariyazi = " ";}
      if(boyacikarici>0){boyacikariciyazi = ` ${boyacikaricie} | Saç B. Temizleyici : ${boyacikarici} \n`;}else{boyacikariciyazi = " ";}
      if(binci>0){binciyazi = ` ${beyazie} | Beyaz İnci : ${binci} \n`;}else{binciyazi = " ";}
      if(minci>0){minciyazi = ` ${maviie} | Mavi İnci : ${minci} \n`;}else{minciyazi = " ";}
      if(kinci>0){kinciyazi = ` ${kirmiziie} | Kırmızı İnci : ${kinci} \n`;}else{kinciyazi = " ";}
      if(lucyyuzuk>0){lucyyuzukyazi = ` ${lucyninyuzugue} | Lucy'nin Yüzüğü : ${lucyyuzuk} \n`;}else{lucyyuzukyazi = " ";}
      if(altinyuzuk>0){altinyuzukyazi = ` ${altinyuzuke} | Altın Yüzük : ${altinyuzuk} \n`;}else{altinyuzukyazi = " ";}
/* ENVANTER YAZI */

      const embed = new Discord.RichEmbed()
  .setColor("BLUE")
   .addField(`AkyaMT2`, `${user.tag}`)
  .addField(":fishing_pole_and_fish:  | Çanta", `${hamuryazi} ${solucanyazi} ${minikbalikyazi} ━━━━━━━━━\n ${zarganayazi} ${tekiryazi} ${ringayazi} ${somonyazi} ${sudakyazi} ${buyuksudakyazi} ${siyahyazi} ${beyazyazi} ${kahverengiyazi} ${sariyazi} ${boyacikariciyazi} ${binciyazi} ${minciyazi} ${kinciyazi} ${lucyyuzukyazi} ${altinyuzukyazi}`)
  .setThumbnail(user.avatarURL)
  .setTimestamp()
  message.channel.send(embed)
 






}
