const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, Client } = require('discord.js')
const os = require('os');

module.exports = {
     data: new SlashCommandBuilder()
             .setName('stats')
             .setDescription("Sends stats about the bot."),
  async execute(interaction, client) {

    let totalSeconds = (interaction.client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0"  + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const totaluptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

         interaction.reply({embeds: [
           new MessageEmbed()
           .setTitle('Bot stats')
           .setColor('#0xe100ff')
       	   .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
           .setTimestamp()
           .addFields([
             {
               name: 'Ping',
               value: "`" + `${Date.now() - interaction.createdTimestamp}` + "ms`",
               inline: true
             },
             {
              name: 'API Latency',
              value: "`" + `${Math.round(interaction.client.ws.ping)}` + "ms`",
              inline: true
            },
            {
              name: 'OS',
              value: "`" + `${os.type} ${os.arch}` + "`",
              inline: true
            },
            {
              name: 'Uptime',
              value: "`" + `${totaluptime}` + "`"
            }
           ])
         ]})
    }
  }
