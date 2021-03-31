const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require("body-parser");
const path = require('path')
const db = require('quick.db')
const Discord = require('discord.js')


/**
 * Websocket class.
 * @param {string}         token  Token to authenticate at the web interface
 * @param {number}         port   Port to access web interface
 * @param {discord.Client} client Discord client instance to access the discord bot
 */
class WebSocket {

    constructor(token, port, client) {
        this.token = token
        this.port = port
        this.client = client
        this.app = express()

        // Register Handlebars instance as view engine
        this.app.engine('hbs', hbs({
            extname: 'hbs',                     // Extension (*.hbs Files)
            defaultLayout: 'layout',            // Main layout -> layouts/layout.hbs
            layoutsDir: __dirname + '/layouts'  // Layouts directory -> layouts/
        }))
        // Set folder views/ as location for views files
        this.app.set('views', path.join(__dirname, 'views'))
        // Set hbs as view engine
        this.app.set('view engine', 'hbs')
        // Set public/ as public files root
        this.app.use(express.static(path.join(__dirname, 'public')))
        // Register bodyParser as parser for Post requests body in JSON-format
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        this.registerRoots()

        // Start websocket on port defined in constructors arguments
        this.server = this.app.listen(port, () => {
            console.log("Websocket API set up at port " + this.server.address().port)
        })
    }

    /**
     * Compare passed token with the token defined on
     * initialization of the websocket
     * @param {string} _token Token from request parameter 
     * @returns {boolean} True if token is the same
     */
    checkToken(_token) {
        return (_token == this.token)
    }

    /**
     * Register root pathes
     */
    registerRoots() {
        this.app.get('/', (req, res) => {
            var _token = req.query.token
            if (!this.checkToken(_token)) {
                // Render error view if token does not pass
                res.render('error', { title: "ERROR" })
                return
            }

            // Collect all text channels and put them into an
            // array as object { id, name }
            var chans = []
            this.client.guilds.first().channels
                .filter(c => c.type == 'text')
                .forEach(c => {
                    chans.push({id: c.id, name: c.name})
                })
    
            // Render index view and pass title, token
            // and channels array
            res.render('index', { 
                title: "AkyaMT2 - Admin Panel", 
                token: _token, 
                chans 
            })
        })
    
        

        this.app.post('/sendMessageAll', (req, res) => {
            var _token = req.body.token
            var messageall = req.body.messageall

            if(!_token || !messageall)
                return res.sendStatus(400);
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)

                
                    console.log("Send Message alla");
                
                    this.client.guilds.first().channels
                    .filter(c => c.type == 'text')
                    .forEach(c => {
                        if(c.id == "535106930192941066"){return;}
                        if(c.id == "692885146990280714"){return;}
                        if(c.id == "695286756345380904"){return;}
                        this.client.channels.get(c.id).send(messageall);
                    })
               
              

        })

        this.app.post('/sendMoneyPlease', (req, res) => {
            var _token = req.body.token
            var won = req.body.won
            var kisi = req.body.id
            var miktar = req.body.miktar
            

            if(!_token || !won || !kisi || !miktar){console.log("p");
            res.sendStatus(400); return; }
                
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)
            // EMBED 
            let username = this.client.users.get(kisi);
            if(won == "won"){
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
            .addField("Won eklendi!", miktar)
            .setThumbnail(kisi.avatarURL)
            .setTimestamp()
            const channel = this.client.channels.get(`749396982409199686`).send(embed)
            }else{
                const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
            .addField("Yang eklendi!", miktar)
            .setThumbnail(kisi.avatarURL)
            .setTimestamp()
            const channel = this.client.channels.get(`749396982409199686`).send(embed)
            }
            // EMBED 
                    console.log(kisi + won + miktar);
                    db.add(`${kisi}.${won}`, miktar)
        })


        


        this.app.post('/removeMoneyPlease', (req, res) => {
            var _token = req.body.token
            var won = req.body.won
            var kisi = req.body.id
            var miktar = req.body.miktar
            

            if(!_token || !won || !kisi || !miktar){console.log("p");
            res.sendStatus(400); return; }
                
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)
            // EMBED 
            let username = this.client.users.get(kisi);
            if(won == "won"){
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
            .addField("Won Kaldırıldı!", miktar)
            .setThumbnail(kisi.avatarURL)
            .setTimestamp()
            const channel = this.client.channels.get(`749396982409199686`).send(embed)
            }else{
                const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
            .addField("Yang Kaldırıldı!", miktar)
            .setThumbnail(kisi.avatarURL)
            .setTimestamp()
            const channel = this.client.channels.get(`749396982409199686`).send(embed)
            }
            // EMBED 
                    console.log(kisi + won + miktar);
                    db.subtract(`${kisi}.${won}`, miktar)
        })










        this.app.post('/resetMoneyPlease', (req, res) => {
            var _token = req.body.token
            var won = req.body.won
            var kisi = req.body.id
            
            

            if(!_token || !won || !kisi){console.log("p");
            res.sendStatus(400); return; }
                
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)

                let username = this.client.users.get(kisi);
                if(won == "won"){
                    const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
                    .addField("Won Sıfırlandı!", "İşlem panel üzerinden gerçekleşmiştir.")
                    .setThumbnail(kisi.avatarURL)
                    .setTimestamp()
                    const channel = this.client.channels.get(`749396982409199686`).send(embed)
                    }else if(won == "yang"){
                        const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
                    .addField("Yang Sıfırlandı!", "İşlem panel üzerinden gerçekleşmiştir.")
                    .setThumbnail(kisi.avatarURL)
                    .setTimestamp()
                    const channel = this.client.channels.get(`749396982409199686`).send(embed)
                    }else if(won == "all"){
                        const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
                    .addField("Yang & Won Sıfırlandı!", "İşlem panel üzerinden gerçekleşmiştir.")
                    .setThumbnail(kisi.avatarURL)
                    .setTimestamp()
                    const channel = this.client.channels.get(`749396982409199686`).send(embed)
                    }
                    // EMBED 

                    console.log(kisi + won );
                    if(won =="won"){db.set(`${kisi}.${won}`, 0)}
                    if(won =="yang"){db.set(`${kisi}.${yang}`, 0)}
                    if(won =="all"){db.set(`${kisi}.won`, 0); db.set(`${kisi}.yang`, 0)}
                    
                
               
              

        })






        this.app.post('/giveItemPlease', (req, res) => {
            var _token = req.body.token
            var itemtype = req.body.itemtype
            var kisi = req.body.id
            var miktar = req.body.miktar
            

            if(!_token || !itemtype || !kisi || !miktar){console.log("p");
            res.sendStatus(400); return; }
                
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)
            // EMBED 
            let username = this.client.users.get(kisi);
            const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
                    .addField("Eşya Eklendi!", `${itemtype} Miktar : ${miktar}`)
                    .setThumbnail(kisi.avatarURL)
                    .setTimestamp()
                    const channel = this.client.channels.get(`749396982409199686`).send(embed)

            console.log(itemtype + miktar);
            db.add(`${kisi}.inventory.${itemtype}`,miktar);
         
        })

        this.app.post('/resetEverythinkPlease', (req, res) => {
            var _token = req.body.token
            var kisi = req.body.id
            

            if(!_token || !kisi){console.log("p");
            res.sendStatus(400); return; }
                
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)
            // EMBED 
            let username = this.client.users.get(kisi);
            const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
                    .addField("Sıfırlandı!", `Bu işlem panel üzerinden gerçekleştirilmiştir!`)
                    .setThumbnail(kisi.avatarURL)
                    .setTimestamp()
                    const channel = this.client.channels.get(`749396982409199686`).send(embed)

            
            db.delete(`${kisi}.oltasahipligi`);
     db.set(`${kisi}.inventory.minikbalik`,0);
     db.set(`${kisi}.won` ,0);
     db.set(`${kisi}.yang` ,0);
     db.set(`${kisi}.inventory.hamur`,5);
     db.set(`${kisi}.inventory.solucan`,3);
       db.set(`${kisi}.inventory.zargana`,0);
      db.set(`${kisi}.inventory.ringa`,0);
      db.set(`${kisi}.inventory.tekir`,0);
      db.set(`${kisi}.inventory.somon`,0);
       db.set(`${kisi}.inventory.sudak`,0);
      db.set(`${kisi}.inventory.buyuksudak`,0);
       db.set(`${kisi}.inventory.siyah`,0);
       db.set(`${kisi}.inventory.beyaz`,0);
      db.set(`${kisi}.inventory.kahverengi`,0);
      db.set(`${kisi}.inventory.kirmizi`,0);
       db.set(`${kisi}.inventory.sari`,0);
       db.set(`${kisi}.inventory.boyacikarici`,0);
     db.set(`${kisi}.inventory.binci`,0);
       db.set(`${kisi}.inventory.minci`,0);
     db.set(`${kisi}.inventory.kinci`,0);
       db.set(`${kisi}.inventory.lucyyuzuk`,0);
       db.set(`${kisi}.inventory.altinyuzuk`,0);
       db.set(`${kisi}.inventory.ban`,0);
       db.set(`${kisi}.oltalevel`, 0)
       db.set(`${kisi}.totalbalik`, 0)
         
        })




        this.app.post('/banPersonPlease', (req, res) => {
            var _token = req.body.token
            var kisi = req.body.id
            
            

            if(!_token || !kisi){console.log("p");
            res.sendStatus(400); return; }
                
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)
            // EMBED 

            let username = this.client.users.get(kisi);
            


            db.set(`${kisi}.ban`,1);
            const embed = new Discord.RichEmbed()
            .setColor("RED")
            .addField(`AKYAMT2 - Admin Yönetimi`, `Yetkili: **Panel**`)
            .addField(`Ban Duyurusu;`, `${username} adlı oyuncu AkyaMT2'den banlanmıştır.`)
            .setThumbnail("https://media1.tenor.com/images/de413d89fff5502df7cff9f68b24dca5/tenor.gif")
            .setTimestamp()
            const channel = this.client.channels.get(`749396982409199686`).send(embed)
         
        })


        this.app.post('/unbanPersonPlease', (req, res) => {
            var _token = req.body.token
            var kisi = req.body.id
            
            

            if(!_token || !kisi){console.log("p");
            res.sendStatus(400); return; }
                
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)
            // EMBED 

            let username = this.client.users.get(kisi);
            


            db.set(`${kisi}.ban`,0);
            const embed = new Discord.RichEmbed()
            .setColor("RED")
            .addField(`AKYAMT2 - Admin Yönetimi`, `Yetkili: **Panel**`)
            .addField(`Ban Duyurusu;`, `${username} adlı adlı oyuncunun AkyaMT2'den banı açılmıştır.`)
            .setThumbnail("https://media1.tenor.com/images/de413d89fff5502df7cff9f68b24dca5/tenor.gif")
            .setTimestamp()
            const channel = this.client.channels.get(`749396982409199686`).send(embed)
         
        })
        

        this.app.post('/setOltaPlease', (req, res) => {
            var _token = req.body.token
            var select = req.body.select
            var kisi = req.body.id
            var miktar = req.body.miktar
            

            if(!_token || !select || !kisi || !miktar){console.log("p");
            res.sendStatus(400); return; }
                
    
            if (!this.checkToken(_token))
                return res.sendStatus(401)
            // EMBED 
            let username = this.client.users.get(kisi);
            if(select == "balik"){
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
            .addField("Balık Sayısı Eklendi!", miktar)
            .setThumbnail(kisi.avatarURL)
            .setTimestamp()
            const channel = this.client.channels.get(`749396982409199686`).send(embed)
            db.add(`${kisi}.totalbalik`,miktar);
            }else{
                const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`AKYA BANK`, `İsim: ${username}\nID: ${kisi}`)
            .addField("Olta Leveli Değiştirildi!", miktar)
            .setThumbnail(kisi.avatarURL)
            .setTimestamp()
            const channel = this.client.channels.get(`749396982409199686`).send(embed)
            db.add(`${kisi}.oltalevel`,miktar);
            }
            // EMBED 
                   
                    
        })
        

    
    }

}

module.exports = WebSocket
