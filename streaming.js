var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  bot.user.setGame("zook = pro", "https://www.twitch.tv/monstercat")
});



bot.login('NDY2MjkxOTY1MTM5NjE1NzU0.D2C8Hg.0YfbGX8DJpw5cnGrUaj-B70zzM0'); 