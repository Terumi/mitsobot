const Discord = require('discord.js');
// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let takis_response = "Οι Γερμανοί είναι φίλοι μας!";
let matches = [
'german', 'merkel', 'γερμανοί', 'γερμανία', 'germany', 'germanoi', 'germania','godwin\'s law', 'ναζί', 'ναζι', 'γερμανια', 'αλεμάνια', 'alemania', 'φιλελέφθερος', '΄φιλελε'
];

client.on('message', msg => {
  Object.values(matches).forEach( function(value){
    if (msg.content.includes(value)) {msg.reply(takis_response);}
      })
});

client.login();

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);
