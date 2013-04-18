onload = init;

	var speed = 10;
	var vx=0;
	var vy=0;
	
function init(){
		document.onkeydown = function(event){moveHero(event);}
		document.onkeyup = function(event){turnBack(event);}
	}
	
function moveHero(event){
			
	switch(event.keyCode){
			case 39:
			console.log("RIGHT");
			vx+=speed;
			document.getElementById("hero").style.left = vx +"px";
			document.getElementsByTagName("a")[1].style.borderColor = "green";
			break;
			
			case 37:
			console.log("LEFT");
			vx-=speed;
			document.getElementById("hero").style.left = vx +"px";
			document.getElementsByTagName("a")[3].style.borderColor = "green";
			break;
			
			case 40:
			console.log("down");
			vy+=speed;
			document.getElementById("hero").style.top = vy +"px";
			document.getElementsByTagName("a")[2].style.borderColor = "green";
			break;
			
			case 38:
			console.log("up");
			vy-=speed;
			document.getElementById("hero").style.top = vy +"px";
			document.getElementsByTagName("a")[0].style.borderColor = "green";
			break;
	}	
}


function turnBack(event){
		document.getElementsByTagName("a")[0].style.borderColor = "";
		document.getElementsByTagName("a")[1].style.borderColor = "";
		document.getElementsByTagName("a")[2].style.borderColor = "";
		document.getElementsByTagName("a")[3].style.borderColor = "";
	}