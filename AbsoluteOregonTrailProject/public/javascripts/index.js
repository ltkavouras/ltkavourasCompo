function myFunction() {
	var str ="If You Dare To Proceed, Press The Spacebar!";
    var goTo = str.link("/mainmenu");
    document.getElementById("EntranceLink").innerHTML = goTo;
}
function keepFading($obj) {
	$obj.fadeToggle(1000, function () {
		keepFading($obj)
    });
}
keepFading($("#EntranceLink"));
