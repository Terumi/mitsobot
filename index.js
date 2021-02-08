const Discord = require('discord.js');
// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let aris_response = "Μπάτσοι, γουρούνια δολοφόνοι!";
let matches = [
'oni', 'onei', 'ώνει', 'όνοι', 'onoi', 'ονοι', 'sony','ονει', 'ονυ', 'όνυ', 'ονει', 'όνι', 'ονι', 'ωνει'
];

client.on('message', msg => {
  Object.values(matches).forEach( function(value){
    if (msg.content.endsWith(value)) {msg.reply(aris_response);}
      })
});

client.login();

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);
