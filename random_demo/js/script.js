// JavaScript Document
onload = init;

var currentScore=0;

function init(){
	randomizeLocation();
	document.getElementById("hero").onclick = function(){heroClick();}
	}

function randomizeLocation(){
	document.getElementById("hero").style.left = Math.random()*500 + "px";
	document.getElementById("hero").style.top = Math.random()*500 + "px";
	}
	
function addScore(){
	currentScore += 3;
	document.getElementById("score").innerHTML = currentScore;
	}
	
function heroClick(){
	randomizeLocation();
	addScore();
	}