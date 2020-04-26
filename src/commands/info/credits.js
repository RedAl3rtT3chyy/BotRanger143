const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Credits:")
        .setColor(0x0000FF)
        .addField("Developer:", "RedAl3rt // T3chyy")
        .addField("Made for the funniest goofball:", "ClayRanger143")
        .addField("More to come!", "Overtime. This bot will be a one of a kind to the community. and the bot development team will expand!")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.channel.send(embed)
}