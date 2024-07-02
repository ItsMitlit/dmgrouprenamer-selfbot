const { Client } = require('discord.js-selfbot-v13') // USES DISCORD.JS-SELFBOT-V13
const { token, name2Set, channelID, logSuccesses } = require('./config.json'); // GET CONFIG

const client = new Client({
    checkUpdate: false 
})

// LOG TO CONSOLE WHEN THE BOT IS READY
client.on('ready', async () => { 
    console.log('Self-bot is ready')
});

// WHEN THE CHANNEL IS UPDATED
client.on('channelUpdate', (ignoreme, newChannel) => {
    if (newChannel.type === 'GROUP_DM' && newChannel.id === channelID) { // CHECK IF IT IS A GROUP DM AND MATCHES THE CHANNEL ID
        if (newChannel.name !== name2Set) { // CHECK IF THE NAME IS NOT THE SAME AS THE NAME YOU WANT TO SET
            newChannel.setName(name2Set) // SET THE NAME TO THE NAME YOU WANT
            .catch(console.error);
            if (logSuccesses) console.log(`Renamed group DM to "${name2Set}"`) // LOG TO CONSOLE
                
        }
    }
});

client.login(token)
