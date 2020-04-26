require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs').promises;
const path = require('path')
const prefix = process.env.PREFIX
client.commands = new Map();



client.login(process.env.BOT_TOKEN)

client.on('ready', () => {

    client.user.setPresence({ activity: { name: 'Loading..' }, status: 'dnd' })
    //The (BotRanger143 Window) doesn't mean anything.. This is to make it simplier for me to tell what bot process it is
    //since I host 2 bots and I need to tell what window a specific bot is so don't close the wrong bot process.
    console.log("Loading.. (BotRanger143 Window)")
    setTimeout(() => {
        console.log("Loading completed.")
        client.user.setPresence({ activity: { name: 'for DAVIDSON COUNTY | c%help', type: "WATCHING" }, status: 'online' })
    }, 20000);
});

client.on('message', async message => {

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    let cmdName = message.content.substring(message.content.indexOf(prefix)+2).split(new RegExp(/\s+/)).shift();
    let argsToParse = message.content.substring(message.content.indexOf(' ')+1);
    if(client.commands.get(cmdName))
        client.commands.get(cmdName).run(client, message, argsToParse);
    else {
        console.log("Command does not exist.");
    }

});

(async function registerCommands(dir = 'commands') {
    let files = await fs.readdir(path.join(__dirname, dir));
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory())
            registerCommands(path.join(dir, file));
        else {
            if(file.endsWith(".js")) {
                let cmdName = file.substring(0, file.indexOf(".js"));
                let cmdModule = require(path.join(__dirname, dir, file));
                client.commands.set(cmdName, cmdModule);
            }
        }
    }
})();

