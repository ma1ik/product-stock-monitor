// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.login(token);

module.exports = {

    callback: ({ message, channel}) => {
        message.reply('Enter your name:')

        const filter = (m) => {
            return m.author.id === m.author.id;
        }

        const collector = channel.createMessageCollector({
            filter,
            max: 1,
            time: 5000
        })

        collector.on('collect', message => {
            console.log(message.content)
        })

        collector.on('end', collected => {
            if (collected.size === 0) {
                message.reply('You did not provide your name')
                return
            }

            let text = 'Collected:\n\n'

            collected.forEach((message) => {
                text += `${message.content}\n`
            })

            message.reply(text);

        })

    }

}

client.on('messageCreate', async (message) => {
        if (message.author.bot) return;

        const filter = (m) =>
            m.author.id === message.author.id;

        if (message.content === "?hello") {
            message.channel.send("Hello there, What is your name?");

            const msgs = await message.channel.awaitMessages(filter, {time: 5000});
            console.log(msgs.size);

        }
    });

// Login to Discord with your client's token

