// JavaScript Document

onload= init;

var speed = 10;

function init(){
	document.getElementsByTagName("body")[0].onkeydown = function(event){moveShip(event);}
}

function moveShip(event){
	//console.log(event.keyCode);
		
	switch(event.keyCode){
			case 39:
			console.log("RIGHT");
			speed+=5;
			document.getElementById("space-ship").style.left = speed +"px";
			break;
			
			case 37:
			console.log("LEFT");
			speed-=5;
			document.getElementById("space-ship").style.left = speed +"px";
			break;
	}	
}