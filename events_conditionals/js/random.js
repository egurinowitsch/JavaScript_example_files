onload = init;

var randomNumber = 0;

function init(){
		document.getElementById("random").onclick = function(){click();}
		document.getElementById("random").onmousedown = function(){down();}
		document.getElementById("random").onmouseup = function(){up();}
	}
	
function click(){
		randomNumber=Math.floor(Math.random()*100);
		document.getElementById("number").innerHTML = randomNumber;
	}
	
function down(){
		document.getElementById("random").style.backgroundColor = "orange";
		document.getElementById("random").style.color = "black";
	}
	
function up(){
		document.getElementById("random").style.backgroundColor = "#7ceb8b";
		document.getElementById("random").style.color = "white";
	}