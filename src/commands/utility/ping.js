const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
    let latancy = (Date.now() - message.createdTimestamp);
        const embed = new MessageEmbed()
        .setTitle("Pong!")
        .setColor(0x0000FF)
        .addField("📶 Latency:", `${latancy}ms`)
        .addField("💻 API:", `${Math.round(client.ws.ping)}ms`)
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.channel.send(embed)
}