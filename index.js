var restify = require('restify');
var builder = require('botbuilder');
var quotes = ['u playing OW tonight?',
'Hi Remy',
'remy we gonna start gaming house that ive always talked about',
'so passive aggressive. this guy posts this in our team chat, after he heard someone else ask me to fix it yesterday evening',
'if u want to fk urself right now then go ahead and do stupid shit like what u are saying',
'chicken is protein, protein is good for u',
'pls recommend some movies to download so i can watch on plane/airport',
'u know that feel when u are so full from eating, but u are also so thirsty cuz u havent had any water the whole day?'];

//var server = restify.createServer(https_options);
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
console.log('App ID: ' + process.env.MICROSOFT_APP_ID);
var connector = new builder.ChatConnector({
    appId: 'c58e5534-ce3a-4916-9aea-cee702a52846',
    appPassword: 'vySyHM3Mid8VgyOCHFUCNVm'
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
	var randomNum = Math.floor(Math.random() * (quotes.length));
    session.send(quotes[randomNum]);
});
