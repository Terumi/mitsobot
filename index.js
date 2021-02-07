const Discord = require('discord.js');
// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.endsWith('oni')) {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.content.endsWith('onei')) {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.content.endsWith('ώνει')) {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.content.endsWith('ονει')) {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.content.endsWith('ονει')) {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.content.endsWith('όνι')) {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.content.endsWith('ονι')) {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.content.endsWith('ωνει')) {
    msg.reply('Μπάτσοι, γουρούνια δολοφόνοι');
  }
  if (msg.content.endsWith('ένωση')) {
    msg.reply('Ένωση Κεντρώων!');
  }
  if (msg.content.endsWith('ένωση!')) {
    msg.reply('Ένωση Κεντρώων!');
  }
  if (msg.content.endsWith('enosi')) {
    msg.reply('Ένωση Κεντρώων!');
  }
  if (msg.content.endsWith('enosi!')) {
    msg.reply('Ένωση Κεντρώων!');
  }
});

// Here you can login the bot. It automatically attempts to login the bot
// with the environment variable you set for your bot token ("DISCORD_TOKEN")
client.login();

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);
