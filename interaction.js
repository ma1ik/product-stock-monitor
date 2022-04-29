// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
let { zavvi } = require("./index.js");

client.login(token)

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('messageCreate',  (message) => {

    // `m` is a message object that will be passed through the filter function
    // checks to make sure that the author message is the same as the message ID
    const filter = m => m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector({filter, time: 2000});

    if (message.author.bot) return;

    if (message.content === "I would like to track stock") {
        message.channel.send("Ok, what item would you like to track?");
    }

    // New switch statement [testing]
    const options = ['nintendo switch grey', 'nintendo switch red blue', 'nintendo switch lite'];
    const userChoice = options.find((o) => o === message.content);
    if (!userChoice) {
        //handles incorrect choice
        return;
    }

    if (message.content === userChoice) {
        message.channel.send("Alright, let me see what I can do");
    }

    if (message.content === 'nintendo switch grey') {
        return message.reply(zavvi);

    }
});
























    // useless block not needed
/*    collector.on('collect', m => {
        console.log(`Collected ${m.content}`);
    });

    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });*/


