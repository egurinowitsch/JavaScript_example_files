// JavaScript Document
onload = init;

function init(){
	document.getElementsByTagName("a")[0].onclick = function(){backgroundButton();};
	document.getElementsByTagName("a")[1].onclick = function(){typeColor();};
	document.getElementsByTagName("a")[2].onclick = function(){minimize();};
	document.getElementsByTagName("a")[3].onclick = function(){larger();};
	document.getElementsByTagName("a")[4].onclick = function(){display();};
	document.getElementsByTagName("a")[5].onclick = function(){move();};
	
}

function backgroundButton(){
	if(document.getElementsByTagName("article")[0].className=="background"){
  		document.getElementsByTagName("article")[0].className="";
 	}else{
   		document.getElementsByTagName("article")[0].className = "background";
 		}
}

function typeColor(){
	if(document.getElementsByTagName("p")[0].className=="type"){
		document.getElementsByTagName("p")[0].className="";
	}else{
		document.getElementsByTagName("p")[0].className = "type";
		}
}

function minimize(){
	if(document.getElementsByTagName("article")[0].className=="mini"){
		document.getElementsByTagName("article")[0].className="";
	}else{
		document.getElementsByTagName("article")[0].className = "mini";
		}
}

function larger(){
	if(document.getElementsByTagName("article")[0].className=="larger"){
		document.getElementsByTagName("article")[0].className="";
	}else{
		document.getElementsByTagName("article")[0].className = "larger";
		}
}

function display(){
	if(document.getElementsByTagName("article")[0].className=="hide"){
		document.getElementsByTagName("article")[0].className="";
	}else{
		document.getElementsByTagName("article")[0].className = "hide";
		}
}

function move(){
	if(document.getElementsByTagName("article")[0].className=="move"){
		document.getElementsByTagName("article")[0].className="move2";
	}else{
		document.getElementsByTagName("article")[0].className = "move";
		}
}



