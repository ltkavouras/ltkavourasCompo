var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var port = 1337;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static('views'));
app.get('/index', function(request, response){
  response.sendFile('/views/index.html', {root:__dirname});
});
app.get('/mainmenu', function(request, response){
  response.sendFile('/views/mainmenu.html', {root:__dirname});
});
app.get('/game', function(request, response){
  response.sendFile('/views/game.html', {root:__dirname});
});
app.get('/topten', function(request, response){
  response.sendFile('/views/topten.html', {root:__dirname});
});

var game = require('./controllers/gameController');

app.get('/game/getNewGameScreen/:screenId', function (request, response) {

var gameScreen = game.startGameScreens[request.params.screenId];
	response.setHeader('Content-Type','text/html');
	response.send(gameScreen);
});

app.get('/game/savePlayerNames/:playerId/:playerName', function(request, response) {
	game.gameSettings.players[request.params.playerId] = request.params.playerName;
	response.setHeader('Content-Type','text/html');
	response.send(game.gameSettings.playerName);
});

app.get('/game/saveStartMonth/:startMonth', function(request, response) {
    game.gameSettings.startMonth = request.params.startMonth;
    response.setHeader ('Content-Type', 'text/html');
});

app.get('/game/getSettings', function(request, response) {
    response.setHeader ('Content-Type' , 'text/html');
});


app.get('/game/getSettings', function(request,response) {
	response.setHeader ('Content-Type' , 'text/html');
	response.send(game.gameSettings);
	})

app.listen(port);
console.log('Spinning up server on port ' + port);
