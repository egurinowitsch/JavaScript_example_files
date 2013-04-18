// JavaScript Document
	
onload = init;

function init(){
document.getElementsByTagName("a")[0].onclick = function(){addSection();};
document.getElementsByTagName("a")[1].onclick = function(){removeSection();};
document.getElementsByTagName("a")[2].onclick = function(){changeStyle("smores","display");};
document.getElementsByTagName("a")[3].onclick = function(){changeTitle();};
document.getElementsByTagName("a")[4].onclick = function(){changeTitle2();};
document.getElementsByTagName("a")[5].onclick = function(){addBook();};
document.getElementsByTagName("a")[6].onclick = function(){removeSleep();};
document.getElementsByTagName("a")[7].onclick = function(){changeStyle2("pic");};
document.getElementsByTagName("a")[8].onclick = function(){changeTitle3();};
document.getElementsByTagName("a")[9].onclick = function(){changeTitle4();};


}

function addSection(){
	var list = document.createElement("li"); 
	list.innerHTML = "Water Balloon Fight";
	var destination = document.getElementsByTagName("li")[12]; 
	destination.parentNode.insertBefore(list,destination);
	}
	
function removeSection(){
	var ol = document.getElementsByTagName("ol")[1];
	var li = document.getElementsByTagName("li")[15];
	
	ol.removeChild(li);
	}
	
function changeStyle(){
	document.getElementById("smores").className = "display";
	
	}

function changeTitle(){
	var h1 = document.createElement("h1");
	h1.innerHTML = "Summer To-Do List";
	var destination = document.getElementsByTagName("h1")[0];
	destination.parentNode.replaceChild(h1,destination);
	}
	
function changeTitle2(){
	var li = document.createElement("li");
	li.innerHTML = "Run a 10k";
	var destination = document.getElementsByTagName("li")[15];
	destination.parentNode.replaceChild(li,destination);
	}
	
function addBook(){
	var list = document.createElement("li"); 
	list.innerHTML = "Hunger Games";
	var destination = document.getElementsByTagName("li")[16]; 
	destination.parentNode.appendChild(list,destination);
	}
	
function removeSleep(){
	var ol = document.getElementsByTagName("ol")[1];
	var li = document.getElementById("sleep");
	
	ol.removeChild(li);
	}

function changeStyle2(){
	
	
	var img=document.createElement("img");
	img.src="images/Kayaking.jpg";
	
	document.getElementsByTagName("section")[0].appendChild(img);
	}
	
function changeTitle3(){
	var h2 = document.createElement("h2");
	h2.innerHTML = "Kayaking";
	var destination = document.getElementsByTagName("h2")[0];
	destination.parentNode.replaceChild(h2,destination);
	}
	
function changeTitle4(){
	var title = document.createElement("title");
	title.innerHTML = "By Eric Gurinowitsch";
	var destination = document.getElementsByTagName("title")[0];
	destination.parentNode.replaceChild(title,destination);
	}