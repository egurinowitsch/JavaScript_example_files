// JavaScript Document
/*onload = init;

function init(){
	console.log("My program started");
	document.getElementsByTagName("a")[0].onclick = function(){console.log("I have been clicked");};	
}
*/

onload = init;

function init(){
	//console.log("My program started");
	document.getElementsByTagName("a")[0].onclick = function(){changeStyle("headline","color")};
	document.getElementsByTagName("a")[1].onclick = function(){changeStyle("headline","size")};
	document.getElementsByTagName("a")[2].onclick = function(){changeStyle("headline","font")};	
	return "My program has started";
}

function changeStyle(id,classStyle){
	document.getElementById(id).className = classStyle;
	return "a style has been changed";
}


/*
same as code 20 - 23

var changeStyle = function(id,classStyle){
	document.getElementById(id).className = classStyle;
	return "a style has been changed";
}
*/