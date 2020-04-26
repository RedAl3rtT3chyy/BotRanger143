const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Changelog for Version beta 1.1")
        .setColor(0x0000FF)
        .addField("Credits!", "View the credits for the bot, such as supporters, developers, etc")
        .addField("Changelog!", "The changelog is here. This page updates every update. Make sure you keep watch every time it's updated!")

        message.channel.send(embed)
}