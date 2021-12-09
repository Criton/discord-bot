require('dotenv').config()
const { Client } = require('discord.js')
const client = new Client()


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})


client.on('message', async message => {
    const splitMessage = message.content.split(' ')

    if (splitMessage[0] === '$Papo') {
        const command = splitMessage[1]

        if (!command) {
            return
        }

        if (command.toLowerCase() === 'hello') {
            await message.reply("Szióka, én egy teszt BOT vagyok és mellette egy ktsg vén hülye!.... :D peace, még tesztelés alatt vagyok")
        }
    }
})

client.login(process.env.DISCORD_BOT_TOKEN)