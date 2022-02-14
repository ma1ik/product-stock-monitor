// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

// When user sends message in Discord, message appears in terminal
client.on('messageCreate', message => {
    // checks if author who sent message is a bot
    if (message.author.bot) return;
    console.log(message.content);
    // compares message with user and bot replies
    if (message.content === 'hello') {
        // randomly picks a response to reply to user
        let greetings = ['Hi', 'Hey', 'Hello', 'yo'];
        let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        // greets user's name and asks how can I help
        message.channel.send(randomGreeting + " " + message.author.username + ", How can I help you today?");
    }
});

// Login to Discord with your client's token
client.login(token);
