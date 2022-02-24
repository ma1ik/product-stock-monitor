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
    let greetings = ['hi', 'hey', 'sup', 'hello'];
    let trackStock = ['i would like to track stock', 'track stock'];
    // message accepts any greeting from the above array and bot will reply
    if (greetings.includes(message.content.toLowerCase())) {
        // randomly picks a response to reply to user
        let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        // greets user's name and asks how can I help
        message.channel.send(randomGreeting + " " + message.author.username + ", how can I help you today?");
        message.channel.send('Please select from the options below:' + '\n' +
            'I would like to track stock')
        // else statement if user doesn't put a valid input
    } else {
        message.channel.send('Sorry, I didn\'t quite understand that, can you make sure the input is correct!');
    }
    // User asks to track stock
    else if (trackStock.includes(message.content.toLowerCase())) {
        message.channel.send('Alright, what product would you like to track?')
    }
});

// Login to Discord with your client's token
client.login(token);
