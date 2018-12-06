const Discord = require('discord.js')
const client = new Discord.Client()
var token = require('./auth.js')

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    console.log("Ready")
})
client.login(token.bot_secret_token)
