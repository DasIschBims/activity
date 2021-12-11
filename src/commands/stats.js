const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
     data: new SlashCommandBuilder()
             .setName('stats')
             .setDescription("Sends stats about the bot."),
  async execute(interaction) {

    const uptime = (interaction.client.uptime / 1000)
    const days = Math.floor(uptime / 86400)
    const hours = Math.floor(uptime / 3600)
    const minutes = Math.floor(uptime / 60)
    const seconds = Math.floor(uptime % 60)

    const totaluptime = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`

    const memoryuse = Math.round(process.memoryUsage().heapUsed) / 1024 / 1024
    const memorytotal = Math.round(process.memoryUsage().heapTotal) / 1024 / 1024
    const memoryusage = Math.trunc(memoryuse)
    const memorytotaluseable = Math.trunc(memorytotal)
    const cpuused = Math.round(process.cpuUsage().system) / 1024
    const cpuusage = Math.round(cpuused)

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
             },
             {
               name: "CPU Usage",
               value: "`" + `${cpuusage}` + "%`"
             },
             {
               name: "Memory Usage",
               value: "`" + `${memoryusage}mb / ${memorytotaluseable}mb` + "`"
             }
           ])
         ]})
    }
  }
  