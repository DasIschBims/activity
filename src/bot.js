const { ShardingManager } = require("discord.js");
const { token } = require("./config.json")
const chalk = require('chalk');

var options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};

const sharding = new ShardingManager(
    './src/index.js',
    {
        totalShards: "auto",
        shardList: "auto",
        token: token
    }
)

console.log(chalk.magenta("Creating shard/s"))

sharding.on("shardCreate", async (shard) => {
    console.log(chalk.cyanBright(`Shard created | ${new Date().toLocaleDateString("de-DE", options)} | Shard ${shard.id}`))
});

sharding.spawn()

setTimeout(() => {
    const promises = [
        sharding.fetchClientValues('guilds.cache.size'),
        sharding.broadcastEval(m => m.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
    ]

    Promise.all(promises).then(results => {
        const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0)
        const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0)

        return console.log(chalk.yellowBright(`| Guilds: ${totalGuilds}\n| Members: ${totalMembers}`))
    })
    setTimeout(() => {
        console.log(chalk.blue("Bot is ready.")) 
    }, 1000);
}, 7000);