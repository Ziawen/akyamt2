const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.author.send('Bu komut için yeterli yetkiye sahip değilsin!')
    }

    const member = message.mentions.users.first();

    if(!member){
        message.channel.send("Hak vereceğin kişiyi seç!");
    }


    db.add(`${member.id}.inventory.ban`, 1);
    message.channel.send(`${member} Adlı kişi 1 ban hakkın verildi. `);
}