// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { simplyGames, zavvi } = require('./index');



// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('messageCreate',  (message) => {

    // `m` is a message object that will be passed through the filter function
    // checks to make sure that the author message is the same as the message ID
    const filter = m => m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector({ filter, time: 2000 });


    // Code here the other if statements
    if (message.content === "I would like to track stock") {
        message.channel.send("Ok, what item would you like to track?");
    }
/*
    let userChoice;
    // switch statement
    switch('switch_statement') {
        case 'playstation 5':
            userChoice = 'playstation 5';
            break;
        case 'playstation':
            userChoice = 'playstation';
            break;
        case 'ps5':
            userChoice = 'ps5';
            break;
        default:
        // code block
    }

*/
    if (message.content === 'userChoice') {
        message.channel.send("Alright, let me see what I can do");
    }

    collector.on('collect', m => {
        console.log(`Collected ${m.content}`);
    });

    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });

});



simplyGames;
//console.log(zavvi);

client.login(token);