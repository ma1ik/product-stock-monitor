// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

module.exports = {
    callback: (message) => {
        // these are the questions that the bot will say
        // so I need to make it that an if statement will compare what the
        // user has written and if so, go to next option follow word doc
        const questions = [
            'Hey, how can I help you today?',
            //user says they want to track stock
            ''
        ]
    }

}

// Login to Discord with your client's token
client.login(token);
