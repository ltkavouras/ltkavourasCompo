
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
