var exports = module.exports = {};
var fs = require('fs');
var bodyParser = require('body-parser');
  // Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended:false});
var express = require('express');
var app = express();

app.use(express.static('public'));
exports.startGameScreens = [];
//var url = "https://www.google.com";
var startGame1 = "<p>You may: </p>" +
 "<ol id='setupQuestions1'>" +
	 "<li id='bankerMenuItem'>Be a Banker from Boston</li>" +
	 "<li id='carpenterMenuItem'>Be a carpenter from Ohio</li>" +
	 "<li id='farmerMenuItem'>Be a farmer from Illinois</li>" +
	 "<li id='differentMenuItem'>Find out the differences between the choices</li>" +
 "<ol>" +
"<div id='selectOption'>What is your choice?<input type='button' class='button1' id='page1sub' value='Next' onclick='window.location.href=\"/game/getNewGameScreen/1\"'></div>";


var startGame2 = "<p>What is the first name of your wagon leader?</p><br>" +
	"<label>Leader Name: <input id='player0'></label><br>" +
	"<input type='button' class='button2' id='page2sub' value='Next' onclick='window.location.href=\"/game/getNewGameScreen/2\"'>";

  app.post('/process_post', urlencodedParser, function(req, res){
    var data = fs.readFileSync('userData.json');
    var information = JSON.parse(data);
    console.log(information);
    // Prepares the output into JSON format
    response = {
      first_name : req.body.first_name,
      last_name : req.body.last_name
    };
  var dataConversion = res.end(JSON.stringify(information));
  fs.writeFile('userData.json', dataConversion, finished);
  function finished(err) {
      console.log(dataConversion);
  }
  });

/*******************************End of Game Screen 2 ************************/
var startGame3 = "<p>What is the first names for each of the other members of your party?</p>" +
	"<label>Player Name: <input id='player1'></label><br>" +
	"<label>Player Name: <input id='player2'></label><br>" +
	"<label>Player Name: <input id='player3'></label><br>" +
	"<label>Player Name: <input id='player4'></label><br>" +
	"<label>Player Name: <input id='player5'></label><br>" +
    "<input type='button' class='button3' id='page3sub' value='Next' onclick='window.location.href=\"/game/getNewGameScreen/3\"'>";

var startGame4 = "<p>It's too important to figure out when to start traveling.</p>"+
	"<p>If you go out too early, there won't be enought grass for the oxen to eat.</p>" +
    "<p>If you go out too late winter will hit, and you'll be stuck in a snow storm.</p>" +
	"<span id='monthMarch'>March</span><br>" +
    "<span id='monthApril'>April</span><br>" +
    "<span id='monthMay'>May</span><br>" +
    "<span id='monthJune'>June</span><br>" +
    "<span id='monthJuly'>July</span><br>" +
    "<span id='monthAugus'>August</span><br>" +
	"<div id='selectedOption'>What is your choice?<input type='button' class='button4' id='page4sub' value='Next' onclick='window.location.href=\"/game/getNewGameScreen/4\"'></div>";

var startGame5 = "<p>Are the following settings what you picked?</p>" +
	"<div id='professionChoice'></div><br>" +
    "<div id='monthChoice'></div><br>" +
    "<div id='player0'></div><br>" +
    "<div id='allowance'></div><br>" +
    "<div id='player1'></div><br>" +
    "<div id='player2'></div><br>" +
    "<div id='player3'></div><br>" +
    "<div id='player4'></div><br>" +
    "<div id='player5'></div><br>" +
	"<div id='gameStart'>Start Traveling the Trail</div><br>";

function getGameSettings() {
    this.players=[];
    this.profession;
    this.money;
    this.startMonth;
}
exports.gameSettings= new getGameSettings();

exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2);
exports.startGameScreens.push(startGame3);
exports.startGameScreens.push(startGame4);
exports.startGameScreens.push(startGame5);
exports.startGameScreens.push(getGameSettings());

//exports.gameSettings = new gameData();
