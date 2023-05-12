const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILD_MESSAGES', 'GUILDS', 'GUILD_MEMBERS'] });

const BOT_TOKEN = 'YOUR TOKEN HERE';
const BAN_WORDS = ['WORD1', 'WORD2', 'WORD3']; // Add your banned words here
const TARGET_CHANNEL_ID = 'CHANNEL ID';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;

  const bannedWordFound = BAN_WORDS.find(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    return regex.test(message.content);
  });

  if (bannedWordFound) {
    try {
      // Delete the message containing the banned word
      await message.delete();

      const targetChannel = await client.channels.fetch(TARGET_CHANNEL_ID);

      try {
        await message.member.ban({ reason: `Used banned word: ${bannedWordFound}` });

        // Create an embedded message with the user's information
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setTitle('User Banned')
          .setDescription(`User ${message.author.tag} \n User ID: ${message.author.id} \n was banned from ${message.guild.name} for using the banned word: ${bannedWordFound} \n\n Message content: \`\`\`${message.content}\`\`\``)
          .setTimestamp();
          
        // Send the embedded message
        targetChannel.send({ embeds: [embed] });
      } catch (error) {
        if (error.code === 50013) { // Missing permissions error code
          // Create an embedded message with the user's information and a note about permissions
          const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('User Not Banned')
            .setDescription(`User ${message.author.tag} \n User ID: ${message.author.id} \n In guild: ${message.guild.name} \n could not be banned for using the banned word: ${bannedWordFound} \n Reason: Permissions are too high \n\n Message content: \`\`\`${message.content}\`\`\``)
            .setTimestamp();

          // Send the embedded message
          targetChannel.send({ embeds: [embed] });
        } else {
          console.error('Failed to ban user or delete message:', error);
        }
      }
    } catch (error) {
      console.error('Failed to delete message:', error);
    }
  }
});

client.login(BOT_TOKEN);