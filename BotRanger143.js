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
        .addField("c%credits", "Shows the credits and development team who helped work for the bot.")
        .addField("c%changelog", "Shows the changelog for the latest update.")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.channel.send(embed)
    }

    if(message.content == prefix + "version") {
        message.channel.send("Version beta 1.1")
    }

    if (message.content == prefix + "abouteas") {
        
        const embed = new MessageEmbed()
        .setTitle("What's the Emergency Alert System?")
        .setColor(0x0000FF)
        .setDescription("The Emergency Alert System (EAS) is a national warning system in the United States put into place on January 1, 1997 (approved by the Federal Communications Commission (FCC) in November 1994), when it replaced the Emergency Broadcast System (EBS), which in turn replaced CONELRAD. It is jointly coordinated by the Federal Emergency Management Agency (FEMA), the Federal Communications Commission (FCC) and the National Oceanic and Atmospheric Administration (NOAA). The EAS regulations and standards are governed by the Public Safety and Homeland Security Bureau of the FCC.")
        .setFooter("Source: https://en.wikipedia.org/wiki/Emergency_Alert_System")

        message.channel.send(embed)
    }

    if (message.content == prefix + "credits") {

        const embed = new MessageEmbed()
        .setTitle("Credits:")
        .setColor(0x0000FF)
        .addField("Developer:", "RedAl3rt // T3chyy")
        .addField("Made for the funniest goofball:", "ClayRanger143")
        .addField("More to come!", "Overtime. This bot will be a one of a kind to the community. and the bot development team will expand!")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.channel.send(embed)

    }

    if(message.content == prefix + "changelog") {
        const embed = new MessageEmbed()
        .setTitle("Changelog for Version beta 1.1")
        .setColor(0x0000FF)
        .addField("Credits!", "View the credits for the bot, such as supporters, developers, etc")
        .addField("Changelog!", "The changelog is here. This page updates every update. Make sure you keep watch every time it's updated!")

        message.channel.send(embed)
    }

    



});

