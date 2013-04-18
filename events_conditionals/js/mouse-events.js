onload = init;

function init(){
	document.getElementsByTagName("a")[0].onclick = function(){click();};
	document.getElementsByTagName("a")[1].onmousedown = function(){down();};
	document.getElementsByTagName("a")[1].onmouseup = function(){up();};	
	document.getElementsByTagName("a")[2].onmouseover = function(){over();};
	document.getElementsByTagName("a")[2].onmouseout = function(){out();};
}

function click(){
	if(document.getElementsByTagName("a")[0].style.backgroundColor == "blue"){
  	   document.getElementsByTagName("a")[0].style.backgroundColor ="";
 	}else{
   	   document.getElementsByTagName("a")[0].style.backgroundColor = "blue";
 		}
}

function down(){
		document.getElementsByTagName("a")[1].style.backgroundColor = "red";
		document.getElementsByTagName("a")[1].style.color = "black";
		
}

function up(){
		document.getElementsByTagName("a")[1].style.backgroundColor = "#7ceb8b";
		document.getElementsByTagName("a")[1].style.color = "white";
}

function over(){
		document.getElementsByTagName("a")[2].style.backgroundColor = "orange";
		document.getElementsByTagName("a")[2].style.color = "black";
}

function out(){
		document.getElementsByTagName("a")[2].style.backgroundColor = "#7ceb8b";
		document.getElementsByTagName("a")[2].style.color = "white";
}
