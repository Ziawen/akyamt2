const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args, config) => {

  let bandurumu = db.get(`${message.author.id}.ban`);
  if(bandurumu==1){return message.channel.send(":no_entry_sign: AkyaMT2'den kalıcı olarak banlandınız!")}
  

  let kontrol = db.get(`${message.author.id}.oltasahipligi`);

  let bakim = db.get(`bakim`);
  if(bakim==1){if(message.author.id !== "276245746586484736") if(message.author.id !== "221963543430430720") return message.channel.send(":no_entry_sign: AkyaMT2 Bakımdadır.")}

  if(!kontrol){
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Bilgilendirme:", `Balık tutmak için oltaya ihtiyacınız var **!oltaal** .`)
    .setTimestamp()
    message.channel.send(embed) 
  return;    
}


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
let hamur = db.get(`${message.author.id}.inventory.hamur`);
let solucan = db.get(`${message.author.id}.inventory.solucan`);

let user = message.mentions.users.first() || message.author
       let author = db.fetch(`${message.author.id}.yang`)
       let giris = args[0];
       let yem = args[1];
       var response = Math.floor(Math.random() * 201);
       var sonuctext = " ";







      /* Şans */

      if(yem == "hamur"){
        if(hamur<1){
          const embed = new Discord.RichEmbed()
          .setColor("RED")
          .addField(`:fishing_pole_and_fish:  | AKYAMT2 ${user.tag}`, `Hamur ile balık tutabilmek için !market'ten Hamur almanız gerekmektedir!`)
          .setTimestamp()
          message.channel.send(embed)
          return; 
        }



        if(response >= 1 &&  response<= 140 ){
          console.log(response);
          var sonuc = "minikbalik";
          sonuctext = `${minikbalike} Minik Balık`;
        }
         if(response >= 141 &&  response<= 144 ){
          console.log(response);
          var sonuc = "zargana";
        sonuctext = `${Zarganae} Zargana`;
        }
         if(response >= 145 &&  response<= 148 ){
          console.log(response);
          var sonuc = "tekir";
        sonuctext = `${tekire} Tekir`;
        }
         if(response >= 149 &&  response<= 162 ){
          console.log(response);
          var sonuc = "ringa";
          sonuctext = `${ringae} Ringa`;
        }
         if(response >= 163 &&  response<= 166 ){
          console.log(response);
          var sonuc = "somon";
          sonuctext = `${Somone} Somon`;
        }
         if(response >= 167 &&  response<= 180 ){
          console.log(response);
          var sonuc = "sudak";
        sonuctext = `${sudake} Sudak`;
        }
         if(response >= 181 &&  response<= 183 ){
          console.log(response);
          var sonuc = "siyah";
          sonuctext = `${siyahboyae} Siyah Boya`;
        }
         if(response >= 184 &&  response<= 186 ){
          console.log(response);
          var sonuc = "beyaz";
          sonuctext = `${beyazboyae} Beyaz Boya`;
        }
         if(response >= 187 &&  response<= 189 ){
          console.log(response);
          var sonuc = "kahverengi";
          sonuctext = `${kahverengiboyae} Kahverengi Boya`;
        }
         if(response >= 190 &&  response<= 192 ){
          console.log(response);
          var sonuc = "kirmizi";
          sonuctext = `${kirmiziboyae} Kırmızı Boya`;
        }
         if(response >= 193 &&  response<= 195 ){
          console.log(response);
          var sonuc = "sari";
          sonuctext = `${Sariboyae} Sarı Boya`;
        }
         if(response >= 196 &&  response<= 198 ){
          console.log(response);
          var sonuc = "boyacikarici";
          sonuctext = `${boyacikaricie} Boya Çıkarıcı`;
        }
         if(response >= 199 &&  response<= 200 ){
          console.log(response);
          var sonuc = "beyaz inci";
          sonuctext = `${beyazie} Beyaz İnci`;
        }
      }



if(yem == "solucan"){
  if(solucan<1){
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField(`:fishing_pole_and_fish:  | AKYAMT2 ${user.tag}`, `Solucan ile balık tutabilmek için !market'ten Solucan almanız gerekmektedir!`)
    .setTimestamp()
    message.channel.send(embed)
    return; 
  }
  

       if(response >= 1 &&  response<= 60 ){
        console.log(response);
        var sonuc = "minikbalik";
        sonuctext = `${minikbalike} Minik Balık`;
      }

      if(response >= 61 && response <= 70){
       console.log(response);
        var sonuc = "zargana";
        sonuctext = `${Zarganae} Zargana`;
     }

     if(response >= 71 &&  response<= 80 ){
       console.log(response);
        var sonuc = "tekir";
        sonuctext = `${tekire} Tekir`;
     }

     if(response >= 81 &&  response<= 100 ){
       console.log(response);
        var sonuc = "ringa";
        sonuctext = `${ringae} Ringa`;
     }
      if(response >= 101 &&  response<= 110 ){
       console.log(response);
        var sonuc = "somon";
        sonuctext = `${Somone} Somon`;
     }
      if(response >= 111 &&  response<= 130 ){
       console.log(response);
        var sonuc = "sudak";
        sonuctext = `${sudake} Sudak`;
     }
      if(response >= 131 &&  response<= 140 ){
       console.log(response);
        var sonuc = "buyuksudak";
        sonuctext = `${Byksudake} Büyük Sudak`;
     }
      if(response >= 141 &&  response<= 146 ){
       console.log(response);
        var sonuc = "siyah";
        sonuctext = `${siyahboyae} Siyah Boya`;
     }
      if(response >= 147 &&  response<= 152 ){
       console.log(response);
        var sonuc = "beyaz";
        sonuctext = `${beyazboyae} Beyaz Boya`;
     }
      if(response >= 153 &&  response<= 158 ){
       console.log(response);
        var sonuc = "kahverengi";
        sonuctext = `${kahverengiboyae} Kahverengi Boya`;
     }
      if(response >= 159 &&  response<= 164 ){
       console.log(response);
        var sonuc = "kirmizi";
        sonuctext = `${kirmiziboyae} Kırmızı Boya`;
     }
      if(response >= 165 &&  response<= 170 ){
       console.log(response);
        var sonuc = "sari";
        sonuctext = `${Sariboyae} Sarı Boya`;
     }
      if(response >= 171 &&  response<= 176 ){
       console.log(response);
        var sonuc = "boyacikarici";
        sonuctext = `${boyacikaricie} Boya Çıkarıcı`;
     }
      if(response >= 177 &&  response<= 186  ){
       console.log(response);
        var sonuc = "beyaz inci";
        sonuctext = `${beyazie} Beyaz İnci`;
     }
      if(response >= 187 &&  response<= 192 ){
       console.log(response);
        var sonuc = "mavi inci";
        sonuctext = `${maviie} Mavi İnci`;
     }
      if(response >= 193 &&  response<= 196 ){
       console.log(response);
        var sonuc = "kirmizi inci";
        sonuctext = `${kirmiziie} Kırmızı İnci`;
     }
      if(response >= 197 &&  response<= 199 ){
       console.log(response);
        var sonuc = "Lucy'nin Yüzüğü";
        sonuctext = `${lucyninyuzugue} Lucy'nin Yüzüğü`;
     }
      if(response == 200  ){
       console.log(response);
        var sonuc = "Altın Yüzük";
        sonuctext = `${altinyuzuke} Altın Yüzük`;
     }
    }

    

     /* Şans */



       /* VERITABANI TANIMLAMA */


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
       let cooldown = db.get(`${message.author.id}.balikcooldown`);
       let totalbalik = db.get(`${message.author.id}.totalbalik`);
       let oltalevelhazir =db.get(`${message.author.id}.oltalevelhazir`)
       if(!totalbalik){db.set(`${message.author.id}.totalbalik`, 0);}



      let toplam = minik_balik+zargana+tekir+ringa+somon+sudak+buyuk_sudak+siyah+beyaz+kahverengi+kirmizi+sari+boyacikarici+binci+minci+kinci+lucyyuzuk+altinyuzuk;
      console.log(toplam);
       /* VERITABANI BITIŞ */


       if(cooldown == "bekleamk"){message.channel.send(message.author + " Balık tutmak için 1 saniye beklemelisin! ") .then(xnxx => {xnxx.delete(5000)}); return;}


    if (giris == 'tut') {
      if(!totalbalik){
        db.set(`${message.author.id}.totalbalik`,0)
      }
      if(!oltalevelhazir){
        db.set(`${message.author.id}.oltalevelhazir`,0)
      }

        

      if(yem == "solucan" || yem == "hamur"){
      // OLTA LEVEL SISTEMI





      if(totalbalik==250)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==500)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==1000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==1500)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==2000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==2500)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==3000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==3500)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==4000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==5000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==6000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==7000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==8000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==9000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==10000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==12000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==14000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==16000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==18000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }else if(totalbalik==20000)
      {
        message.channel.send("wow dostum 250 tane balik tuttun bu çok epicc olamaz bir şey oluyor oltana artı basıldı omggg")
        
        db.add(`${message.author.id}.oltalevelhazir`,1)
      }





      // OLTA LEVEL SISTEMI - BITIS




    }





      if(yem == "solucan"){
        

      db.set(`${message.author.id}.balikcooldown`, "bekleamk");
      setTimeout(() => { 
        db.set(`${message.author.id}.balikcooldown`, "devamamk");
    }, 1000)
        if(solucan<1){
          
          const embed = new Discord.RichEmbed()
          .setColor("RED")
           .addField(`AkyaMT2`, `${user.tag}`)
          .addField(":fishing_pole_and_fish:  | Market", `Solucan ile balık tutabilmek için !market'ten Solucan almanız gerekmektedir!`)
          .setTimestamp()
          message.channel.send(embed)
          return; 
        }
        db.add(`${message.author.id}.totalbalik`,1);
        db.subtract(`${message.author.id}.inventory.solucan`,1);
      }else if(yem == "hamur"){
        

        

      db.set(`${message.author.id}.balikcooldown`, "bekleamk");
      setTimeout(() => {
        db.set(`${message.author.id}.balikcooldown`, "devamamk");
    }, 1000)
        if(hamur<1){
          
          const embed = new Discord.RichEmbed()
          .setColor("RED")
           .addField(`AkyaMT2`, `${user.tag}`)
          .addField(":fishing_pole_and_fish:  | Market", `Hamur ile balık tutabilmek için !market'ten Hamur almanız gerekmektedir!`)
          .setTimestamp()
          message.channel.send(embed)
          return; 
        }
        db.add(`${message.author.id}.totalbalik`,1);
        db.subtract(`${message.author.id}.inventory.hamur`,1);
      }else{message.channel.send("maloç"); return;}

      

        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(`:fishing_pole_and_fish:  | AkyaMT2 ${message.author.tag}`, `**${sonuctext}** Kazandın.!`)
    .setTimestamp()
    message.channel.send(embed)
      if(sonuc=="minikbalik")
        db.add(`${message.author.id}.inventory.minikbalik`, 1)
      if(sonuc=="zargana")
        db.add(`${message.author.id}.inventory.zargana`, 1)
        if(sonuc=="tekir")
        db.add(`${message.author.id}.inventory.tekir`, 1)
      if(sonuc=="ringa")
        db.add(`${message.author.id}.inventory.ringa`, 1)
        if(sonuc=="somon")
        db.add(`${message.author.id}.inventory.somon`, 1)
      if(sonuc=="sudak")
        db.add(`${message.author.id}.inventory.sudak`, 1)
      if(sonuc=="buyuksudak")
        db.add(`${message.author.id}.inventory.buyuksudak`, 1)
        if(sonuc=="siyah")
        db.add(`${message.author.id}.inventory.siyah`, 1)
      if(sonuc=="beyaz")
        db.add(`${message.author.id}.inventory.beyaz`, 1)
      if(sonuc=="kahverengi")
        db.add(`${message.author.id}.inventory.kahverengi`, 1)
        if(sonuc=="kirmizi")
        db.add(`${message.author.id}.inventory.kirmizi`, 1)
      if(sonuc=="sari")
        db.add(`${message.author.id}.inventory.sari`, 1)
      if(sonuc=="boyacikarici")
        db.add(`${message.author.id}.inventory.boyacikarici`, 1)
        if(sonuc=="beyaz inci")
        db.add(`${message.author.id}.inventory.binci`, 1)
      if(sonuc=="mavi inci")
        db.add(`${message.author.id}.inventory.minci`, 1)
      if(sonuc=="kirmizi inci")
        db.add(`${message.author.id}.inventory.kinci`, 1)
        if(sonuc=="Lucy'nin Yüzüğü")
        db.add(`${message.author.id}.inventory.lucyyuzuk`, 1)
        if(sonuc=="Altın Yüzük")
        db.add(`${message.author.id}.inventory.altinyuzuk`, 1)

    }
   

  if(giris == 'sat'){
    let giris2 = args[1];
    let miktar = args[2];


    //FIYAT LISTESI
    let minikbalik_fiyat=3000;
    let zargana_fiyat=18000;
    let tekir_fiyat=18000;
    let ringa_fiyat=18000;
    let somon_fiyat=18000;
    let sudak_fiyat=9000;
    let buyuksudak_fiyat=18000;
    let siyah_fiyat=30000;
    let boyacikarici_fiyat=30000;
    let beyaz_fiyat=30000;
    let kahverengi_fiyat=30000;
    let kirmizi_fiyat=30000;
    let sari_fiyat=30000;
    let binci_fiyat=18000;
    let minci_fiyat=30000;
    let kinci_fiyat=30000;
    let lucyyuzuk_fiyat=60000;
    let altinyuzuk_fiyat=180000;
    //FIYAT LISTESI




    
    if(miktar <= 0){message.channel.send("Geçerli bir miktar giriniz!"); return;}
    if(!giris2 ){
      const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Eşya Listesi", `minikbalik,zargana,tekir,ringa,somon,sudak,buyuksudak,siyahboya,boyacikarici,beyazboya,kahverengiboya,kirmiziboya,sariboya,beyazinci,maviinci,kirmiziinci,lucyyuzuk,altinyuzuk`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
    }
   
    if(giris2 == 'hersey'){
     
      var sayilar = [`minikbalik`,`zargana`, `tekir`, `ringa`,`somon`,`sudak`,`buyuksudak`,`siyah`,`boyacikarici`,`beyaz`,`kahverengi`,`kirmizi`,`sari`,`binci`,`minci`,`kinci`,`lucyyuzuk`,`altinyuzuk`];
     
      var fiyatlar = [minikbalik_fiyat,zargana_fiyat, tekir_fiyat, ringa_fiyat,somon_fiyat,sudak_fiyat,buyuksudak_fiyat,siyah_fiyat,boyacikarici_fiyat,beyaz_fiyat,kahverengi_fiyat,kirmizi_fiyat,sari_fiyat,binci_fiyat,minci_fiyat,kinci_fiyat,lucyyuzuk_fiyat,altinyuzuk_fiyat];
        
      let totalkazanc=0;
      let totalmiktara=0;

      for(let i=0; i<sayilar.length;i++ ){

            console.log(sayilar[i]);
            let totalmiktar = db.get(`${message.author.id}.inventory.${sayilar[i]}`)
            totalmiktara=totalmiktara+totalmiktar;
            db.subtract(`${message.author.id}.inventory.${sayilar[i]}`, totalmiktar);
            let parakazan = fiyatlar[i]*totalmiktar;
            db.add(`${message.author.id}.yang`, parakazan)
            console.log(parakazan);
            totalkazanc=totalkazanc+parakazan;

        }

        if(totalmiktara == 0){
          const embed = new Discord.RichEmbed()
          .setColor("BLUE")
          .addField(":fishing_pole_and_fish:  | Uyarı", `:fish: | Satabilecek eşyan yok!`)
          .setThumbnail(user.avatarURL)
          .setTimestamp()
          message.channel.send(embed)
        }else{
        const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Toplu Eşya Sattı", `:fish: | ${totalmiktara} adet **Toplu Eşya** sattı ve karşılığında ${totalkazanc} Yang kazandı!`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
      
    }

        
    }else if(giris2 == 'minikbalik'){
      if(minik_balik == 0){
        message.reply("Satabileceğin bir Minik Balığa sahip değilsin!")
        return;
      }
      if(minik_balik < miktar){
        message.reply("Girdiğin miktar kadar Minik Balığa sahip değilsin!")
        return;
      }
      if(!miktar){
          miktar = 1;
      }
        
          var parakazandi = miktar*minikbalik_fiyat;
          db.subtract(`${message.author.id}.inventory.minikbalik`, miktar);
          db.add(`${message.author.id}.yang`, parakazandi)
          const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Minik Balık sattı ve karşılığında ${parakazandi} Yang kazandı!`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
        
    }


    else if(giris2 == 'zargana'){
      if(zargana == 0){
        message.reply("Satabileceğin bir Zarganaya sahip değilsin!")
        return;
      }
      if(zargana < miktar){
        message.reply("Girdiğin miktar kadar Zarganaya sahip değilsin!")
        return;
      }
      if(!miktar){
          miktar = 1;
      }
        
          var parakazandi = miktar*zargana_fiyat;
          db.subtract(`${message.author.id}.inventory.zargana`, miktar);
          db.add(`${message.author.id}.yang`, parakazandi)
          const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Zargana sattı ve karşılığında ${parakazandi} Yang kazandı!`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
        
    }

    else if(giris2 == 'tekir'){
      if(tekir == 0){
        message.reply("Satabileceğin bir Tekire sahip değilsin!")
        return;
      }
      if(tekir < miktar){
        message.reply("Girdiğin miktar kadar Tekire sahip değilsin!")
        return;
      }
      if(!miktar){
          miktar = 1;
      }
        
          var parakazandi = miktar*tekir_fiyat;
          db.subtract(`${message.author.id}.inventory.tekir`, miktar);
          db.add(`${message.author.id}.yang`, parakazandi)
          const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Tekir sattı ve karşılığında ${parakazandi} Yang kazandı!`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
        
    }

    else if(giris2 == 'ringa'){
      if(ringa == 0){
        message.reply("Satabileceğin bir Ringaya sahip değilsin!")
        return;
      }
      if(ringa < miktar){
        message.reply("Girdiğin miktar kadar Ringaya sahip değilsin!")
        return;
      }
      if(!miktar){
          miktar = 1;
      }
        
          var parakazandi = miktar*ringa_fiyat;
          db.subtract(`${message.author.id}.inventory.ringa`, miktar);
          db.add(`${message.author.id}.yang`, parakazandi)
          const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Ringa ve karşılığında ${parakazandi} Yang kazandı!`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
        
    }


    else if(giris2 == 'somon'){
      if(somon == 0){
        message.reply("Satabileceğin bir Somona sahip değilsin!")
        return;
      }
      if(somon < miktar){
        message.reply("Girdiğin miktar kadar Somona sahip değilsin!")
        return;
      }
      if(!miktar){
          miktar = 1;
      }
        
          var parakazandi = miktar*somon_fiyat;
          db.subtract(`${message.author.id}.inventory.somon`, miktar);
          db.add(`${message.author.id}.yang`, parakazandi)
          const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Somon sattı ve karşılığında ${parakazandi} Yang kazandı!`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
        
    }

    else if(giris2 == 'sudak'){
      if(sudak == 0){
        message.reply("Satabileceğin bir Sudak sahip değilsin!")
        return;
      }
      if(sudak < miktar){
        message.reply("Girdiğin miktar kadar Sudak'a sahip değilsin!")
        return;
      }
      if(!miktar){
          miktar = 1;
      }
        
          var parakazandi = miktar*sudak_fiyat;
          db.subtract(`${message.author.id}.inventory.sudak`, miktar);
          db.add(`${message.author.id}.yang`, parakazandi)
          const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Sudak sattı ve karşılığında ${parakazandi} Yang kazandı!`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
        
    }


    else if(giris2 == 'buyuksudak'){
      if(buyuk_sudak == 0){
        message.reply("Satabileceğin bir Büyük Sudağa sahip değilsin!")
        return;
      }
      if(buyuk_sudak < miktar){
        message.reply("Girdiğin miktar kadar Büyük Sudağa sahip değilsin!")
        return;
      }
      if(!miktar){
          miktar = 1;
      }
        
          var parakazandi = miktar*buyuksudak_fiyat;
          db.subtract(`${message.author.id}.inventory.buyuksudak`, miktar);
          db.add(`${message.author.id}.yang`, parakazandi)
          const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Büyük Sudak sattı ve karşılığında ${parakazandi} Yang kazandı!`)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
        
    }

  

    else if(giris2 == 'siyahboya'){
    if(siyah == 0){
      message.reply("Satabileceğin bir Siyah Boyaya sahip değilsin!")
      return;
    }
    if(siyah < miktar){
      message.reply("Girdiğin miktar kadar Siyah Boyaya sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*siyah_fiyat;
        db.subtract(`${message.author.id}.inventory.siyah`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Siyah Boya ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }
	  
	  else if(giris2 == 'boyacikarici'){
    if(boyacikarici == 0){
      message.reply("Satabileceğin bir Boya Çıkarıcıya sahip değilsin!")
      return;
    }
    if(boyacikarici < miktar){
      message.reply("Girdiğin miktar kadar Boya Çıkarıcıya sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*boyacikarici_fiyat;
        db.subtract(`${message.author.id}.inventory.boyacikarici`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Boya Çıkarıcı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }


  else if(giris2 == 'beyazboya'){
    if(beyaz == 0){
      message.reply("Satabileceğin bir Beyaz Boyaya sahip değilsin!")
      return;
    }
    if(beyaz < miktar){
      message.reply("Girdiğin miktar kadar Beyaz Boyaya sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*beyaz_fiyat;
        db.subtract(`${message.author.id}.inventory.beyaz`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Beyaz Boya sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }


  else if(giris2 == 'kahverengiboya'){
    if(kahverengi == 0){
      message.reply("Satabileceğin bir Kahverengi Boyaya sahip değilsin!")
      return;
    }
    if(kahverengi < miktar){
      message.reply("Girdiğin miktar kadar Kahverengi Boyaya sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*kahverengi_fiyat;
        db.subtract(`${message.author.id}.inventory.kahverengi`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Kahverengi Boya sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }

  else if(giris2 == 'kirmiziboya'){
    if(kirmizi == 0){
      message.reply("Satabileceğin bir Kırmızı Boyaya sahip değilsin!")
      return;
    }
    if(kirmizi < miktar){
      message.reply("Girdiğin miktar kadar Kırmızı Boyaya sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*kirmizi_fiyat;
        db.subtract(`${message.author.id}.inventory.kirmizi`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Kırmızı Boya sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }

  else if(giris2 == 'sariboya'){
    if(sari == 0){
      message.reply("Satabileceğin bir Sarı Boyaya sahip değilsin!")
      return;
    }
    if(sari < miktar){
      message.reply("Girdiğin miktar kadar Sarı Boyaya sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*sari_fiyat;
        db.subtract(`${message.author.id}.inventory.sari`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Sarı Boya sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }

  else if(giris2 == 'beyazinci'){
    if(binci == 0){
      message.reply("Satabileceğin bir Beyaz İnciye sahip değilsin!")
      return;
    }
    if(binci < miktar){
      message.reply("Girdiğin miktar kadar Beyaz İnciye sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*binci_fiyat;
        db.subtract(`${message.author.id}.inventory.binci`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Beyaz İnci sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }

  else if(giris2 == 'maviinci'){
    if(minci == 0){
      message.reply("Satabileceğin bir Mavi İnciye sahip değilsin!")
      return;
    }
    if(minci < miktar){
      message.reply("Girdiğin miktar kadar Mavi İnciye sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*minci_fiyat;
        db.subtract(`${message.author.id}.inventory.minci`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Mavi İnci sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }

  else if(giris2 == 'kirmiziinci'){
    if(kinci == 0){
      message.reply("Satabileceğin bir Kırmızı İnciye sahip değilsin!")
      return;
    }
    if(kinci < miktar){
      message.reply("Girdiğin miktar kadar Kırmızı İnciye sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*kinci_fiyat;
        db.subtract(`${message.author.id}.inventory.kinci`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Kırmızı İnci sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }

  else if(giris2 == 'lucyyuzuk'){
    if(lucyyuzuk == 0){
      message.reply("Satabileceğin bir Lucy nin Yüzüğüne sahip değilsin!")
      return;
    }
    if(lucyyuzuk < miktar){
      message.reply("Girdiğin miktar kadar Lucy nin Yüzüğüne sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*lucyyuzuk_fiyat;
        db.subtract(`${message.author.id}.inventory.lucyyuzuk`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Lucy nin Yüzüğü sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
  }

  else if(giris2 == 'altinyuzuk'){
    if(altinyuzuk == 0){
      message.reply("Satabileceğin bir Altın Yüzüğe sahip değilsin!")
      return;
    }
    if(altinyuzuk < miktar){
      message.reply("Girdiğin miktar kadar Altın Yüzüğe sahip değilsin!")
      return;
    }
    if(!miktar){
        miktar = 1;
    }
      
        var parakazandi = miktar*altinyuzuk_fiyat;
        db.subtract(`${message.author.id}.inventory.altinyuzuk`, miktar);
        db.add(`${message.author.id}.yang`, parakazandi)
        const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(":fishing_pole_and_fish:  | Eşya Sattı", `:fish: | ${miktar} adet Altın Yüzük sattı ve karşılığında ${parakazandi} Yang kazandı!`)
    .setThumbnail(user.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
   
  }
  } 

}
