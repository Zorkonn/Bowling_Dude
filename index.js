const Discord = require('discord.js')
const tokenfile = require("./token.json")


const bot = new Discord.Client({
    disableEveryone: true
});
bot.on("ready", async () => {
    console.log(`${bot.user.username} on show!`);
    bot.user.setActivity("Polishing balls");
});


bot.on("message", async message => {
    if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
})
bot.login(tokenfile.token)