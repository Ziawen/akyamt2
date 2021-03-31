
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args, config) => {
    let bakim = db.get(`bakim`);
  if(bakim==1){if(message.author.id !== "276245746586484736") if(message.author.id !== "221963543430430720") return message.channel.send(":no_entry_sign: AkyaMT2 Bakımdadır.")}


    let user = message.mentions.users.first() || message.author





let sayi = db.get(`${user.id}.balikcount`);

message.channel.send(sayi);

}