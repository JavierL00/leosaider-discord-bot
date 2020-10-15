'use strict';

const { Client, MessageAttachment } = require('discord.js');
const { measureMemory } = require('vm');
const client = new Client();

// Mensaje en consola de inicio
client.on('ready', () => {
  console.log('Comenzamos!');
  console.log(`Bot is ready as ${client.user.tag}`)
});

// Lógica para mostrar en discord
client.on('message', message => {

  // Repuesta a 'Buenas'
  if(message.content.includes('Buenas comunidad')) {
    message.channel.send(`Hey, ${message.author}! Muy buenas, crack! :sunglasses:`)
  }

  // Comando de bienvenida
  if(message.content === 'L!B') {
    message.channel.send('Bienvenido a Leosaider!')
  }

  // Comando del canal de Twitch
  if(message.content === 'L!T') {
    message.channel.send(`Unete a nuestro Twitch, Crack! https://www.twitch.tv/leosaider :TONAZO:`)
  }

  // Comando del canal de YouTube
  if(message.content === 'L!Y') {
    message.channel.send(`Unete al canal de YouTube! https://www.youtube.com/user/KickingitHard :paz:`)
  }

  // El Ga
  if(message.content === "!ga") {
    message.channel.send('GAAAAAAAAAAAAAAAAAAAAAAA')
  }

  // El Ole
  if(message.content == '!ole') {
    message.channel.send('Oleeeeeeeeeeeeeeee !')
  }
  
  // El Choristar
  if(message.content == '!choristar'){
    message.channel.send('Vas a caer choristar !')
  }
});

client.login('NzU2NTc4MzU1MDMzNDA3NDg4.X2T4gA._4_MI7gJx3iG1X27GUYr-0DhkOU');
// node server.js