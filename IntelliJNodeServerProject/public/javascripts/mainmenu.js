/*********************** Keyboard Shortcut Function***************/

document.body.onkeyup = function keyboardShortcut(e){
      if(e.keyCode == 49){
		 window.location="/game"
	  }
      else if(e.keyCode == 50){
		 window.location="#"
	  }
      else if(e.keyCode == 51){
		 window.location="/topten"
	  }
	  else if(e.keyCode == 52){
		 toggleSound();
	  }
}
/************************  MainMenu Links **********************/
function mmOptions() {

//  Option #1
	var str1 ="Travel The Trail";
    var goTo1 = str1.link("game");
    document.getElementById("tt").innerHTML = goTo1;
	
//  Option #2
	var str2 ="Learn About The Trail";
    var goTo2 = str2.link("");
    document.getElementById("lt").innerHTML = goTo2;
	
//  Option #3
	var str3 ="See the Oregon Top 10";
    var goTo3 = str3.link("topten");
    document.getElementById("ot").innerHTML = goTo3;

// Option #4
	document.getElementById("sound").innerHTML = "Sound Toggle Link";
}

/************************  Mainmenu *****************************/
function MMTeleport() {
	var input = document.getElementById('userChoice').value;
	if (input == 1){
		window.location="game";
	}
	if (input == 2){
		window.location="";
	}
	if (input == 3){
		window.loaction="topten";
	}
	if (input == 4) {
		toggleSound();
	}
	if ((input != 1) && (input != 2) && (input != 3) && (input != 4)) {
		window.alert("Sorry, Please input a valid option, ranging from 1 to 4!");
	}
}