require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')
const prefix = process.env.PREFIX



client.login(process.env.BOT_TOKEN)

client.on('ready', () => {

    client.user.setPresence({ activity: { name: 'Loading..' }, status: 'dnd' })
    console.log("Loading..")
    setTimeout(() => {
        console.log("Loading completed.")
        client.user.setPresence({ activity: { name: 'for DAVIDSON COUNTY | c%help', type: "WATCHING" }, status: 'online' })
    }, 20000);
});

client.on('message', async message => {

    
    if(message.content == prefix + "ping") {

        let latancy = (Date.now() - message.createdTimestamp);
        const embed = new MessageEmbed()
        .setTitle("Pong!")
        .setColor(0x0000FF)
        .addField("📶 Latency:", `${latancy}ms`)
        .addField("💻 API:", `${Math.round(client.ws.ping)}ms`)
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.channel.send(embed)
    }

    if(message.content == prefix + "help") {
        const embed = new MessageEmbed()
        .setTitle("Help commands for BotRanger143")
        .setColor(0x0000FF)
        .addField("c%help", "Shows this page.")
        .addField("c%ping", "Shows latency of bot.")
        .addField("c%version", "Shows bot version")
        .addField("c%abouteas", "Shows information about the Emergency Alert System (EAS)")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.channel.send(embed)
    }

    if(message.content == prefix + "version") {
        message.channel.send("Version beta 1.0")
    }

    if (message.content == prefix + "abouteas") {
        
        const embed = new MessageEmbed()
        .setTitle("What's the Emergency Alert System?")
        .setColor(0x0000FF)
        .setDescription("The Emergency Alert System (EAS) is a national warning system in the United States put into place on January 1, 1997 (approved by the Federal Communications Commission (FCC) in November 1994), when it replaced the Emergency Broadcast System (EBS), which in turn replaced CONELRAD. It is jointly coordinated by the Federal Emergency Management Agency (FEMA), the Federal Communications Commission (FCC) and the National Oceanic and Atmospheric Administration (NOAA). The EAS regulations and standards are governed by the Public Safety and Homeland Security Bureau of the FCC.")
        .setFooter("Source: https://en.wikipedia.org/wiki/Emergency_Alert_System")

        message.channel.send(embed)
    }

});

