const DiscordJS = require('discord.js')
const { Collection } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { token, botId } = require('./config.json')
const chalk = require('chalk')

const fs = require('fs')
const { Intents } = DiscordJS

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_INVITES
    ]
})

client.commands = new Collection()
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js')); 

commandFiles.forEach((commandFile) => {
	const command = require(`./commands/${commandFile}`)
	client.commands.set(command.data.name, command)
})

client.on('ready', () => {
    console.log(chalk.greenBright(`Logged in as ${client.user.tag}!`))

    var state = 0

    setInterval(() => {
        const activitylist = [
            {  type: "LISTENING", message: `slash commands`},
            {  type: "WATCHING", message: `${client.guilds.cache.size} servers`},
            {  type: "PLAYING", message: `discord activites`},
            
        ]

        state = (state + 1) % activitylist.length;
	    const activity = activitylist[state];

	client.user.setActivity(activity.message, { type: activity.type })
    state + 1
    }, 8000);
})

client.on("messageCreate", message => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var d = new Date()

    if (message.author.bot) return false

    if (message.mentions.has(client.user.id)) {
        message.reply({embeds: [
            new MessageEmbed()
            .setTitle('How the bot works')
            .setColor('#0xe100ff')
            .setFooter(`${d.toLocaleDateString("en-US", options)}`)
            .addFields([
              {
                name: 'Command usage',
                value: "I'm using discord's slash commands, just type ``/`` and pick my commands from the list ;)",
                inline: true
              },
              {
                name: 'Detailed help',
                value: "Type ``/help`` and pick the bot's command to get more detailed help.",
                inline: true
              }
            ])
          ], ephemeral: true})
    }
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) return

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(chalk.redBright(error))
        await interaction.reply({ content: 'An error occured while attemting to run this command.', ephemeral: true})
    }
})

client.login(token)
