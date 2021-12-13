const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
     data: new SlashCommandBuilder()
             .setName('ping')
             .setDescription("Displays Bot's current Ping."),
  async execute(interaction, client) {
         interaction.reply({embeds: [
           new MessageEmbed()
           .setTitle('Ping')
           .setColor('#0xe100ff')
           .setTimestamp()
           .addFields([
             {
               name: 'Bot Ping:',
               value: `Current Ping is ${Date.now() - interaction.createdTimestamp}ms`,
               inline: true
             }
           ])
         ]})
    }
  }
