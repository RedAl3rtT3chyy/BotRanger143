const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("What's the Emergency Alert System?")
        .setColor(0x0000FF)
        .setDescription("The Emergency Alert System (EAS) is a national warning system in the United States put into place on January 1, 1997 (approved by the Federal Communications Commission (FCC) in November 1994), when it replaced the Emergency Broadcast System (EBS), which in turn replaced CONELRAD. It is jointly coordinated by the Federal Emergency Management Agency (FEMA), the Federal Communications Commission (FCC) and the National Oceanic and Atmospheric Administration (NOAA). The EAS regulations and standards are governed by the Public Safety and Homeland Security Bureau of the FCC.")
        .setFooter("Source: https://en.wikipedia.org/wiki/Emergency_Alert_System")

        message.channel.send(embed)
}