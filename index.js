// Calling Packages
const Discord = require('discord.js');
const superagent = require("superagent")
const bot = new Discord.Client({disableEveryone: true});
const fs = require('fs');

const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));

// We can call the file with all the functions here.
const func = require('./functions.js'); // If this returns an error for you (or you might be on ubuntu/linux), try '../functions.js'
console.log(func)
// You can also change the name of func to something else like tools.


// Global Settings
const prefix = '>'; // This is the prefix, you can change it to whatever you want.


// Listener Event: Runs whenever a message is received.
bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toLowerCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let args = message.content.slice(prefix.length).trim().split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let cmd = args.shift().toLowerCase(); // This takes away the first object in the cont array, then puts it in this.




    // We also need to make sure it doesn't respond to bots
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return; // We also want to make it so that if the message does not start with the prefix, return.

    // Command Handler - .trim() removes the blank spaces on both sides of the string
    try {
        let commandFile = require(`./commands/${cmd}.js`); // This will assign that filename to commandFile
        commandFile.run(bot, message, args, func); // This will add the functions, from the functions.js file into each commandFile.
    } catch(e) { // If an error occurs, this will run.
        console.log(e.message); // This logs the error message
    } finally { // This will run after the first two clear up
        console.log(`${message.author.username} ran the command: ${cmd}`);
    }



});


bot.login('NTE2MzIwNzQ0NDY5Mjk5MjAz.DtyPpA.tr4hOX2lRc126qNOSmrc6zWG2Pw');
