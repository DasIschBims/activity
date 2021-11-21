# Discord Activities
Start a discord activity for you and your friends.

### Usage

##### Simply type /activities, pick a voice channel and select one of the activities you get listed

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
