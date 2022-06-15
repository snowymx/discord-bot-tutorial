require('dotenv').config()
const { Client, Intents } = require('discord.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const myToken = process.env.TOKEN

client.on('message',msg => {
    if(msg.content === "Hello"){
        msg.reply("Hello!")
    }
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.login(myToken)
