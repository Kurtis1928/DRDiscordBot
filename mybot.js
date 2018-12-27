const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = require("./token.json");

//const prefix = config.prefix;
//Hello world

// Runs when the bot is initialized
client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  // Only responds to messages that start with prefix
  // Only responds to messages that are not sent by another bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  // Converts command input to an array of arguments
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong!");
  }
  if (command === "somefap") {
    message.channel.send("that guy has the big gay");
  }
});

// Bot login using token
client.login(token.botToken);