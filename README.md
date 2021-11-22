# Discord Activities
Start a discord activity for you and your friends.
Invite the bot [here](https://discord.com/api/oauth2/authorize?client_id=912007809284055230&permissions=26625&scope=bot%20applications.commands)

### Usage

Simply type /activities, pick a voice channel and select one of the activities you get listed

<img src="https://i.imgur.com/woYzQD9.png">


### Host yourself?
- Add a config.json in the root folder.
- Enter the following information in it:

```js
{
    "appId": "botAppIdHere",
    "token": "yourBotTokenHere",
    "botId": "botIdHere",
    "owner": "yourUserIdHere"
}
```
- After that's done run ``npm run start`` or ``npm run startshard`` if you need sharding.
