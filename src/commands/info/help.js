const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle("Help commands for BotRanger143")
        .setColor(0x0000FF)
        .addField("c%help", "Shows this page.")
        .addField("c%ping", "Shows latency of bot.")
        .addField("c%version", "Shows bot version")
        .addField("c%abouteas", "Shows information about the Emergency Alert System (EAS)")
        .addField("c%credits", "Shows the credits and development team who helped work for the bot.")
        .addField("c%changelog", "Shows the changelog for the latest update.")
        .addField("c%invite", "Invite BotRanger143 to your server!")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.author.send(embed)
    }