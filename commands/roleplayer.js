const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find('name','Roleplayer')
    message.member.addRole(Role)

    message.channel.send("you are a wizard, <@USER_ID>!");
}

module.exports.help = {
    name: "roleplayer"
}
