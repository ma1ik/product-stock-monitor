// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
let { zavvi } = require("./index.js");

client.login(token)

// Bot logs into the discord channel
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

// Message collector to collect all messages as part of the interaction between the user and bot
client.on('messageCreate',  (message) => {

    // `m` is a message object that will be passed through the filter function
    // checks to make sure that the author message is the same as the message ID
    const filter = m => m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector({filter, time: 2000});

    // checks if the user is a bot and if it's not a bot it will allow the next if statement to be ran
    if (message.author.bot) return;

    // compares users message with the statement tracking stock
    if (message.content === "I would like to track stock") {
        message.channel.send("Ok, what item would you like to track?");
    }

    // options for the user to select from
    const options = ['nintendo switch grey', 'nintendo switch red blue', 'nintendo switch lite'];
    const userChoice = options.find((o) => o === message.content);
    if (!userChoice) {
        //handles incorrect choice
        return;
    }
    // compares users message with user choice
    if (message.content === userChoice) {
        message.channel.send("Alright, let me see what I can do");
    }
    // users message is compared to the product
    // if it's the same then zavvi will return the web scraped product to the user
    // However, this part below is unfinished and does not work, so the tracked product the user requested won't appear.
    if (message.content === 'nintendo switch grey') {
        return message.reply(zavvi);
    }
});
