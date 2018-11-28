const Discord = require('discord.js');
const weather = require('weather-js');
const fs = require('fs');

const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));

exports.run = (bot, message, args, func) => {

    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if (err) message.channel.send(err);

        if (result === undefined || result.length === 0)
        return;

        // Variables
        var current = result[0].current;
        var location = result[0].location;

        const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00AF86)
        .addField('Timezone',`UTC${location.timezone}`, true)
        .addField('Degree Type',location.degreetype, true)
        .addField('Temperature', `${current.temperature} Degrees`, true)
        .addField('Feels like', `${current.feelslike} Degrees`, true)
        .addField('Winds',current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true)

        message.channel.send({embed});
    });
}
