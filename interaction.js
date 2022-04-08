// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { zavvi } = require('./index');
client.login(token)



// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('messageCreate',  (message) => {

    // `m` is a message object that will be passed through the filter function
    // checks to make sure that the author message is the same as the message ID
    const filter = m => m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector({ filter, time: 2000 });
    if (message.author.bot) return;
    let options = ("nintendo switch grey" + '\n' + "nintendo switch red blue" + '\n' + "nintendo switch lite coral");

    // Asks user to select one of the options:
    message.channel.send('Please select one of 3 options: ');
    message.channel.send(options);

    // Code here the other if statements
    if (message.content === "I would like to track stock") {
        message.channel.send("Ok, what item would you like to track?");
    }

/*    let userChoice;
    // switch statement
    switch('switch_statement') {
        case 'nintendo switch grey':
            userChoice = 'nintendo switch grey';
            break;
        case 'nintendo switch red blue':
            userChoice = 'nintendo switch red blue';
            break;
        default:
        case 'nintendo switch lite':
            userChoice = 'nintendo switch lite';
            break;
    }*/

/*    // New switch statement [testing]
    const options = ['nintendo switch grey', 'nintendo switch red blue', 'nintendo switch lite coral'];
    const userChoice = options.find((o) => o === message.content);
    if (!userChoice) {
    ... handle incorrect choice
        return;
    }*/


    if (message.content === 'userChoice') {
        message.channel.send("Alright, let me see what I can do");
    }

    // useless block not needed
/*    collector.on('collect', m => {
        console.log(`Collected ${m.content}`);
    });

    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });*/

});

//console.log(zavvi);

