// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('message', (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (message.content === 'hello') {
        message.reply('hello there!')
            .then(() => console.log(`Replied to message "${message.content}"`))
            .catch(console.error);
    }
});

// Login to Discord with your client's token
client.login(token);
