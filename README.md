# Discord Banned Word Bot

[![Author](https://img.shields.io/badge/Author-Michael%20John%20Pieruszka-blue)](https://github.com/MJPieruszka)

This is a simple Discord bot that detects and takes action when a user sends a message containing banned words. The bot will delete the message, ban the user, and send a notification to a specified channel.

## Prerequisites:
To use this bot, you need to have the following:

- Node.js installed on your system
- A Discord account
- A Discord bot token (Get one by creating a new bot in the Discord Developer Portal)
- The necessary permissions to invite the bot to your server

## Installation:

1. Clone the repository:
   git clone https://github.com/your-username/discord-banned-word-bot.git

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies by running the following command: npm install discord.js

## Configuration:

Before running the bot, you need to provide some configuration details.

1. Open the file index.js in a text editor.
2. Replace 'YOUR TOKEN HERE' with your Discord bot token. This can be found in the Discord Developer Portal.
3. Add the banned words that you want the bot to detect by modifying the BAN_WORDS array. For example: const BAN_WORDS = ['WORD1', 'WORD2', 'WORD3'];
4. Specify the target channel ID where the bot will send ban notifications. Replace 'CHANNEL ID' with the actual channel ID.

## Usage:
To start the bot, run the following command in your terminal or command prompt: node index.js

If everything is configured correctly, the bot will log in and be ready to detect banned words.

## How It Works:
The bot uses the Discord.js library to interact with the Discord API. It listens for message events and checks each message for banned words. If a banned word is found, it follows these steps:

1. Deletes the message containing the banned word.
2. Fetches the target channel to send ban notifications.
3. Attempts to ban the user who sent the message, providing a reason that includes the banned word.
4. If the ban is successful, creates an embedded message with the user's information and the banned word, and sends it to the target channel.
5. If the bot doesn't have sufficient permissions to ban the user, creates an embedded message indicating the lack of permissions and sends it to the target channel.

## Customization:
You can modify the behavior of the bot according to your requirements. Some possible modifications include:

- Adding more banned words to the BAN_WORDS array.
- Changing the content and appearance of the ban notifications by modifying the embedded message in the code.
- Adjusting the bot's permissions to ensure it has the necessary privileges to delete messages and ban users.

## License:

This project is licensed under the [MIT License](LICENSE).