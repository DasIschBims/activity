const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const { owner, token } = require('../config.json')
const fetch = require('node-fetch')

module.exports = {
    data: new SlashCommandBuilder()
      .setName('customactivity')
      .setDescription('Start a Discord activity in a channel')
      .addChannelOption(channel=> channel.setName('channel').setDescription('Pick the channel for your activity.').setRequired(true))
      .addStringOption(act=> act.setName('id').setDescription('Insert an activty ID.').setRequired(true)),
      
      async execute(interaction) {

        const pickedchannel = interaction.options.getChannel('channel')
        const channeltype = pickedchannel.type

        if (channeltype == 'GUILD_VOICE') {
                const customid = interaction.options.getString('id')
                fetch(`https://discord.com/api/v9/channels/${pickedchannel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 600,
                        max_uses: 0,
                        target_application_id: customid,
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
                                name: "Custom Activity",
                                value: `Click [here](https://discord.com/invite/${invite.code}) to join activity, link valid for 10 minutes.`
                            },
                            {
                                name: "Attention!",
                                value: "Custom IDs wont work on servers that don't have access to this Activity."
                            }
                        ])
                    ]})
                })
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