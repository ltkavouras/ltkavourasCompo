var audio = new Audio('audio/Jumpshot.wav');
function checkSound() {
    
    var currentSound = sessionStorage.getItem('soundStatus');
    
    if (currentSound == "false") {
        audio.play();
    } else {
        audio.pause();
    }
    
}
checkSound();
function toggleSound(currentSound) {
	
    var currentSound = sessionStorage.getItem('soundStatus');
    if(currentSound == "false") {
        currentSound = "true";
    }
    else {
        currentSound = "false";
    }
	sessionStorage.setItem('soundStatus', currentSound);
    
    checkSound();

}

/**** spacebar function******/
document.body.onkeyup = function spacebar(e){
	  if(e.keyCode == 32){
		  window.location="mainmenu";
	  }
}
