// Declaration of the topScores array, and the respective data to populate it.	
var topScores = [
	  {name:"Barney Rubble", Score:2050, Date: new Date(99,05,24).toDateString()},
	  {name:"Pebbles Flintstone", Score:1334, Date: new Date(99,05,24).toDateString()},
	  {name:"Daffy Duck", Score:1100, Date: new Date(99,05,24).toDateString()},
	  {name:"Fred Flintstone", Score:1000, Date: new Date(99,05,24).toDateString()},
	  {name:"Pokey Jones", Score:950, Date: new Date(99,05,24).toDateString()},
	  {name:"Tazmanian Devil", Score:725, Date: new Date(99,05,24).toDateString()},
	  {name:"Foghorn Leghorn", Score:500, Date: new Date(99,05,24).toDateString()},
	  {name:"Bugs Bunny", Score:300, Date: new Date(99,05,24).toDateString()},
	  {name:"Gumby Smith", Score:200, Date: new Date(99,05,24).toDateString()},
	  {name:"BamBam Rubble", Score:150, Date: new Date(99,05,24).toDateString()},]


// Definition of the table that will hold the results of the score table
	
document.write('<div class="container" id="tablecontainer"><table class="table table-hover" id="scoreTable"');
document.write('<tr style="font-weight:bolder;"><th>Player Name:</th>' + '<th>Score:</th>' + '<th>Date:</th></tr>');

// Prints the top Score results into the table above in seperate rows
for (var i = 0; i < topScores.length; i++) {
  document.write('<tr><td>' + topScores[i].name + '</td>' +'<td>'+ topScores[i].Score +'</td>' + '<td>'+ topScores[i].Date+'</td>'+ '</tr>');
 
// Sorts the results using "Score"
  topScores.sort(function(a,b){return b.Score - a.Score});
}
document.write('</table></div>');