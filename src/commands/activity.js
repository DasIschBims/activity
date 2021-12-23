const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const { owner, token } = require('../config.json')
const fetch = require('node-fetch')
const log = require('log-to-file')
const chalk = require('chalk')

module.exports = {
    data: new SlashCommandBuilder()
      .setName('activities')
      .setDescription('Start a Discord activity in a channel')
      .addChannelOption(channel=> channel.setName('channel').setDescription('Pick the channel for your activity.').setRequired(true))
      .addStringOption(act=> act.setName('activity').setDescription('Pick any activity from the list.').setRequired(true)
      .addChoice('YouTube Together', 'yttogether')
      .addChoice('Poker Night', 'pokernight')
      .addChoice('Betrayal.io', 'betrayal')
      .addChoice('Fishington.io', 'fishington')
      .addChoice('Chess in the Park', 'chessinthepark')
      .addChoice('Checkers in the park', 'checkersinthepark')
      .addChoice('Doodle Crew', 'doodlecrew')
      .addChoice('Word Snacks', 'wordsnacks')
      .addChoice('Awkword', 'awkword')
      .addChoice('Letter Tile', 'lettertile')),
      
      async execute(interaction) {

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
                        target_application_id: "880218394199220334",
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "YouTube Together",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created YouTube Together.', 'activity-log.txt')
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Poker Night",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Poker Night.', 'activity-log.txt')
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Betrayal.io",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Betrayal.io.', 'activity-log.txt')
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Fishington.io",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Fishington.io.', 'activity-log.txt')
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Chess in the Park",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Chess in the Park.', 'activity-log.txt')
                })
                break
            }
            case "checkersinthepark": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "832013003968348200",
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Checkers in the Park",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Checkers in the Park.', 'activity-log.txt')
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Doodle Crew",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Doodle Crew.', 'activity-log.txt')
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Word Snacks",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Word Snacks.', 'activity-log.txt')
                })
                break
            }
            case "awkword": {

                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: "879863881349087252",
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Awkword",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Awkword.', 'activity-log.txt')
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
                        .setTimestamp()
                        .setFields([
                            {
                                name: "Letter Tile",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            }
                        ])
                    ]})
                    log('Created Letter Tile.', 'activity-log.txt')
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
            .setTimestamp()
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