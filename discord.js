/*
You'll need to update the discord.js version from v12 to v13 - see website
This is for the discord server, where the bot joins the server and comes online using the client, token
You can see it here: https://discordjs.guide/creating-your-bot/command-handling.html#individual-command-files
 */
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'beep') {
        await interaction.reply('Boop!');
    }
});

client.login(token);