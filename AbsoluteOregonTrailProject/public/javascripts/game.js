
/****************** GAME WEB PAGE JS ***********************/
function gameOptions() {
	var input = document.getElementById('userChoice').value;
	if (input == 1){
		window.location="";
	}
	if (input == 2){
		window.location="";
	}
	if (input == 3){
		window.loaction="";
	}
	if (input == 4) {
		window.location="";
	}
	if ((input != 1) && (input != 2) && (input != 3) && (input != 4)) {
		window.alert("Sorry, Please input a valid option, ranging from 1 to 4!");
	}
}
var currentScreen=0;
var gameContainer = document.getElementById("gameContainer");
var pName;

function gameScreen(ScreenNumber) {

	// make asynchronous call to server to get requested gameScreen html

	fetch('/game/getNewGameScreen/' + ScreenNumber).then(function(response)	{
	if (response.status !== 200) {
		console.log('problem with ajax call!' + response.status + "msg" + response.value);
		return;
	}
	response.text().then(function(data) {
		gameContainer.innerHTML = data;
		})
	})
}


function saveProfession(profession)	{
	fetch('/game/saveProfession/' + profession).then(function(response) {
	        if (response.status!== 200)	{
	        	console.log('problem with ajax call!' + response.status + "msg" + response.value)
		        return;
	        }
	})
}
function savePlayerNames(PlayerName)	{
	fetch('/game/savePlayerNames/' + profession).then(function(response) {
	        if (response.status!== 200)	{
	        	console.log('problem with ajax call!' + response.status + "msg" + response.value)
		        return;
	        }
})
}
function saveMonth(startMonth)	{
	fetch('/game/saveMonth/' + startMonth).then(function(response){
	if	(response.status !== 200)	{
		console.log('problem with ajax call!' + response.status + "msg" + response.value)
		return;
		}
	})
}
function  saveSettings(profession, name, startMonth)	{
	if(response.status !== 200)	{
		fetch('/game/gameSettings').then(function(response)	{
			console.log('problem with ajax!' + response.status + "msg" + response.value)
			return;
			})
	}
};

gameContainer.addEventListener('click', function (e){

var targetElement = event.target || event.srcElement;
	if(currentScreen==0){
		if(targetElement.id == "bankerMenuItem"){
			saveProfession("banker");
			currentScreen++;
			gameScreen(1);
	}
	 if(targetElement.id == "carpenterMenuItem"){
		saveProfession("carpenter");
		currentScreen++;
		gameScreen(1);
	}
	 if(targetElement.id="farmerMenuItem"){
			saveProfession("farmer");
			currentScreen++;
			gameScreen(1);
		}
	//if(targetElement.id="differentMenuItem"){
				//saveProfession("difference");
		//}
			}


if (currentScreen == 1)	{
	if(targetElement.id == 'page1sub')	{
	pName = document.getElementById("player1").value;
	savePlayer(0,pName);
	currentScreen++;
	gameScreen(2);
	}
}
})
gameScreen(0);
