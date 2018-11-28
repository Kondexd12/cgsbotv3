const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const colours = require("../colours.json");

exports.run = (bot, message, args, func) => {
    let uEmbed = new Discord.RichEmbed()
    .setColor(colours.red)
    .setTitle("Server info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} info`, message.author.displayAvatarURL)
    .addField("**Username**", `${message.author.username}`, true)
    .addField("**Discriminator**", `${message.author.discriminator}`, true)
    .addField("**ID**", `${message.author.id}`, true)
    .addField("**Status**", `${message.author.presence.status}`, true)
    .addField("**Created At**", `${message.author.createdAt}`, true)
    .setFooter(`CGS BOT V3 | Footer`, bot.user.displayAvatarURL)

    message.channel.send({embed: uEmbed});
}

exports.config = {
    name: "userinfo",
    aliases: ["ui"]
}
