const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
     data: new SlashCommandBuilder()
             .setName('help')
             .setDescription("Feeling lost? Get help with this command!"),
  async execute(interaction) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var d = new Date()
         interaction.reply({ephemeral: true, embeds: [
           new MessageEmbed()
           .setTitle('Help')
           .setColor('#0xe100ff')
           .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
           .setFooter(`${d.toLocaleDateString("en-US", options)}`)
           .addFields([
             {
               name: 'How to use the bot:',
               value: "Just type ``/`` and pick the bot's command ``/activites``, great!\nNow you just pick any voice channel of your liking and select an activity.",
               inline: true
             }
           ])
         ]})
    }
  }
