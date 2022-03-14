// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('messageCreate',  (message) => {

    if (message.author.bot) return;
    // Code here the other if statements


    if (message.content === "?hello") {
        message.channel.send("Hello there, What is your name?");
        // `m` is a message object that will be passed through the filter function
        const filter = m => m.content.includes('discord');
        const collector = message.channel.createMessageCollector({ filter, time: 15000 });



        collector.on('collect', m => {
            console.log(`Collected ${m.content}`);
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });

    }
});




client.login(token);