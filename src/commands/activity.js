const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const { owner, token } = require('../config.json')
const fetch = require('node-fetch')
const chalk = require('chalk')

module.exports = {
    data: new SlashCommandBuilder()
      .setName('activities')
      .setDescription('Start a Discord activity in a channel')
      .addChannelOption(channel=> channel.setName('channel').setDescription('Pick the channel for your activity.').setRequired(true))
      .addStringOption(act=> act.setName('activity').setDescription('Insert link you want to play.').setRequired(true)
      .addChoice('YouTube Together', 'yttogether')
      .addChoice('Poker Night', 'pokernight')
      .addChoice('Betrayal.io', 'betrayal')
      .addChoice('Fishington.io', 'fishington')
      .addChoice('Chess in the Park', 'chessinthepark')
      .addChoice('Doodle Crew', 'doodlecrew')
      .addChoice('Word Snacks', 'wordsnacks')
      .addChoice('Letter Tile', 'lettertile')),
      
      async execute(interaction) {

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var d = new Date()

        const pickedchannel = interaction.options.getChannel('channel')
        const channeltype = pickedchannel.type

        if (channeltype == 'GUILD_VOICE') {

        switch(interaction.options.getString('activity')) {
            case "yttogether": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res=> res.json()).then(invite=> {
                    if(!invite.code) return interaction.reply(`An error occured, please contact <@${owner}>`)
                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0xe100ff')
                        .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
                        .setFooter(`${d.toLocaleDateString("en-US", options)}`)
                        .setFields([
                            {
                                name: "YouTube Together",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    console.log(chalk.magentaBright(`Created YouTube Together.`))
                })
                break
            }
            case "pokernight": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "755827207812677713",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res=> res.json()).then(invite=> {
                    if(!invite.code) return interaction.reply(`An error occured, please contact <@${owner}>`)
                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0xe100ff')
                        .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
                        .setFooter(`${d.toLocaleDateString("en-US", options)}`)
                        .setFields([
                            {
                                name: "Poker Night",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    console.log(chalk.magentaBright(`Created Poker Night.`))
                })
                break
            }
            case "betrayal": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "773336526917861400",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res=> res.json()).then(invite=> {
                    if(!invite.code) return interaction.reply(`An error occured, please contact <@${owner}>`)
                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0xe100ff')
                        .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
                        .setFooter(`${d.toLocaleDateString("en-US", options)}`)
                        .setFields([
                            {
                                name: "Betrayal.io",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    console.log(chalk.magentaBright(`Created Betrayal.io`))
                })
                break
            }
            case "fishington": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res=> res.json()).then(invite=> {
                    if(!invite.code) return interaction.reply(`An error occured, please contact <@${owner}>`)
                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0xe100ff')
                        .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
                        .setFooter(`${d.toLocaleDateString("en-US", options)}`)
                        .setFields([
                            {
                                name: "Fishington.io",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    console.log(chalk.magentaBright(`Created Fishington.io`))
                })
                break
            }
            case "chessinthepark": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "832012774040141894",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res=> res.json()).then(invite=> {
                    if(!invite.code) return interaction.reply(`An error occured, please contact <@${owner}>`)
                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0xe100ff')
                        .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
                        .setFooter(`${d.toLocaleDateString("en-US", options)}`)
                        .setFields([
                            {
                                name: "Chess in the Park",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    console.log(chalk.magentaBright(`Created Chess in the Park.`))
                })
                break
            }
            case "doodlecrew": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "878067389634314250",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res=> res.json()).then(invite=> {
                    if(!invite.code) return interaction.reply(`An error occured, please contact <@${owner}>`)
                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0xe100ff')
                        .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
                        .setFooter(`${d.toLocaleDateString("en-US", options)}`)
                        .setFields([
                            {
                                name: "Doodle Crew",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    console.log(chalk.magentaBright(`Created Doodle Crew.`))
                })
                break
            }
            case "wordsnacks": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "879863976006127627",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res=> res.json()).then(invite=> {
                    if(!invite.code) return interaction.reply(`An error occured, please contact <@${owner}>`)
                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0xe100ff')
                        .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
                        .setFooter(`${d.toLocaleDateString("en-US", options)}`)
                        .setFields([
                            {
                                name: "Word Snacks",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    console.log(chalk.magentaBright(`Created Word Snacks.`))
                })
                break
            }
            case "lettertile": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "879863686565621790",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res=> res.json()).then(invite=> {
                    if(!invite.code) return interaction.reply(`An error occured, please contact <@${owner}>`)
                    interaction.reply({embeds: [
                        new MessageEmbed()
                        .setColor('#0xe100ff')
                        .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
                        .setFooter(`${d.toLocaleDateString("en-US", options)}`)
                        .setFields([
                            {
                                name: "Letter Tile",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    console.log(chalk.magentaBright(`Created Letter Tile.`))
                })
                break
            }
        }
    } else {
        interaction.reply({
            ephemeral: true,
            embeds: [
            new MessageEmbed()
            .setColor('#0xe100ff')
            .setImage('https://media.discordapp.net/attachments/898953752478908466/907744410031226920/line.png?width=360&height=2')
            .setFooter(`${d.toLocaleDateString("en-US", options)}`)
            .setFields([
                {
                    name: "Sorry, that didn't work!",
                    value: `Please specify a voice channel.`
                }
            ])
        ]})
    }
    }
}