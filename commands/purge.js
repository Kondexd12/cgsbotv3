const prefix = '>';

exports.run = (bot, message, args, func) => {

     async function purge() {
          message.delete();

          if (!message.member.roles.find("name", "Bot Manager")) {
              message.channel.send('You need the \'Bot Manager\' role to use this command!');
              return;
          }

          if (isNaN(args[0])) {

              message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');
              return;

          }

          const fetched = await message.channel.fetchMessages({limit: args[0]});
          console.log(fetched.size + ' messages found. deleting...');

          // Deleting the messages
          message.channel.bulkDelete(fetched)
              .catch(error => message.channel.send(`Error: ${error}`));

     }

     purge();
  }
