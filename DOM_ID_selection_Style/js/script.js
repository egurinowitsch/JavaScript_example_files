// JavaScript Document
onload = init;

function init(){
	
	document.getElementsByTagName("a")[0].onclick = function(){changeStyle("main_header","color")};
	document.getElementsByTagName("a")[1].onclick = function(){changeStyle("subheader","size")};
	document.getElementsByTagName("a")[2].onclick = function(){changeStyle("body","style")};
	document.getElementsByTagName("a")[3].onclick = function(){changeStyle("image","display")};
	document.getElementsByTagName("a")[4].onclick = function(){changeStyle("background","b_color")};
	document.getElementsByTagName("a")[5].onclick = function(){changeStyle("box","rectangle")};
	document.getElementsByTagName("a")[6].onclick = function(){changeStyle("link","orange_link")};
	document.getElementsByTagName("a")[7].onclick = function(){changeStyle("box","border")};
	
}

function changeStyle(id,classStyle){
	document.getElementById(id).className = classStyle;
	return "a style has been changed";
}
