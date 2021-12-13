const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
     data: new SlashCommandBuilder()
             .setName('stats')
             .setDescription("Sends stats about the bot."),
  async execute(interaction) {

    const uptime = (interaction.client.uptime / 1000)
    const days = Math.floor(uptime / 86400)
    var hours = Math.floor(uptime / 3600)
    var minutes = Math.floor(uptime / 60 / 60)
    var seconds = Math.floor(uptime % 60)

    hours = (hours < 10) ? + hours : hours;
    minutes = (minutes < 10) ? + minutes : minutes;
    seconds = (seconds < 10) ? + seconds : seconds;

    const totaluptime = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`

         interaction.reply({embeds: [
           new MessageEmbed()
           .setTitle('Bot stats')
           .setColor('#0xe100ff')
       	   .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
           .setTimestamp()
           .addFields([
             {
               name: 'Ping',
               value: "`" + `${Date.now() - interaction.createdTimestamp}` + "ms`"
             },
             {
               name: 'Uptime',
               value: "`" + `${totaluptime}` + "`"
             }
           ])
         ]})
    }
  }
