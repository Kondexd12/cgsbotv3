const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://api-to.get-a.life/meme`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let mEmbed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setAuthor(`CGS BOT V3 MEMES!`, message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`CGS BOT V3`, bot.user.displayAvatarURL)

        message.channel.send({embed: mEmbed})

        msg.delete();
}


module.exports.config = {
    name: "serverinfo",
    noalias: "No Aliases",
    description: "Sends a meme from a website!",
    usage: ">meme",
    accessableby: "Members",
    aliases: []
}
