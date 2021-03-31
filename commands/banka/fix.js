const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args, config) => {
    let user = message.mentions.users.first() 

db.set(`${user.id}.balikcooldown`, "devamamk");

message.channel.send("OK!");
}