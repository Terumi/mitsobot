const Discord = require('discord.js');
// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.endsWith === 'oni') {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.endsWith === 'onei') {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.endsWith === 'ώνει') {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.endsWith === 'όνι') {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.endsWith === 'ονι') {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.endsWith === 'ωνει') {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
});

// Here you can login the bot. It automatically attempts to login the bot
// with the environment variable you set for your bot token ("DISCORD_TOKEN")
client.login();
