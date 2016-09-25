var express = require('express');
var app = express();
var Discord = require("discord.js");
var ver ="0.86";
var bot = new Discord.Client();
var getJSON = require('get-JSON');
var colorrole;

bot.on("message", function(message)) {
	if(message.content == "!color") {
		colorrole = message.member.roles.find("name", message.author.id);
		if(colorrole == null) {
			if(message.member.guild.roles.find("name", message.author.id) == null) {
				message.member.guild.createGuild({name: message.author.id});
			}
			message.member.addRole(message.member.guild.roles.find("name", message.author.id));
			colorrole = message.member.roles.find("name", message.author.id);
		}
		colorrole.setColor(Math.random()*16777216);
	}
});

setInterval(function() {
	
}, [1]);

bot.login("MjI3MjA0NzIwNjUyMDU4NjM0.CsCwaQ.DOkzw6x3oLZ6hXbifGX5tGdmhf4");

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
