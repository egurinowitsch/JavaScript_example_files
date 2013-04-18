// JavaScript Document
var family = new Array();
family[0] = "Victor";
family[1] = "Karen";
family[2] = "Robert";
family[3] = "Julie";
family[4] = "Eric";

var profile = new Array();
profile["name"] = "Eric";
profile["age"] = 35;
profile["hometown"] = "Center";
profile["relationshipStatus"] = "married";
profile["yearsMarried"] = 8;

var movieInfo = new Array();
movieInfo[0]={title:"The Expendables 2 ", rating:"R", runtime:"102 min ", genre:"Action ", director:"Simon West"};
movieInfo[1]={title:"Lawless ", rating:"R", runtime:"116 min ", genre:"Drama ", director:"John Hillcoat"};
movieInfo[2]={title:"The Possession ", rating:"PG-13", runtime:"92 min ", genre:"Horror ", director:"Ole Bornedal"};
movieInfo[3]={title:"The Bourne Legacy ", rating:"PG-13", runtime:"135 min ", genre:"Action ", director:"Tony Gilroy"};
movieInfo[4]={title:"The Campaign ", rating:"R", runtime:"85 min ", genre:"Comedy ", director:"Jay Roach"};


onload = init;

function init(){
	document.getElementsByTagName("a")[0].onclick = function(){list1();}
	document.getElementsByTagName("a")[1].onclick = function(){list2();}
	document.getElementsByTagName("a")[2].onclick = function(){list3();}
}

function list1(){
	
	var message = "<ul>";
	for (var i=0; i<family.length; i++){
	message += "<li>"+family[i]+"</li>";
	}
	message += "</ul>";
		
	if(document.getElementById("listDisplay1").innerHTML == message){
  		document.getElementById("listDisplay1").innerHTML ="";
 	}else{
   		document.getElementById("listDisplay1").innerHTML = message;
 		}
}

function list2(){
	
	var message2 = "<ul>";
	message2 += "<li>"+profile["name"]+"</li>"; 
	message2 += "<li>"+profile["age"]+"</li>";
	message2 += "<li>"+profile["hometown"]+"</li>";
	message2 += "<li>"+profile["relationshipStatus"]+"</li>";
	message2 += "<li>"+profile["yearsMarried"]+"</li>";
	message2 += "</ul>";
	
	if(document.getElementById("listDisplay2").innerHTML == message2){
		document.getElementById("listDisplay2").innerHTML ="";
	}else{
		document.getElementById("listDisplay2").innerHTML = message2;
	}
}

function list3(){
	
	var message3 = "<ul>";
	for (var i=0; i<movieInfo.length; i++){
	message3 += "<li>"+movieInfo[i]['title']+'&nbsp;'+'&nbsp;'+movieInfo[i]['rating']+"</li>";
	message3 += "<li>"+movieInfo[i]['runtime']+'&nbsp;'+'&nbsp;'+movieInfo[i]['genre']+'&nbsp;'+'&nbsp;'+movieInfo[i]['director']+"</li>"+"<br>";
	}
	message3 += "</ul>";
		
	if(document.getElementById("listDisplay3").innerHTML == message3){
  		document.getElementById("listDisplay3").innerHTML ="";
 	}else{
   		document.getElementById("listDisplay3").innerHTML = message3;
 		}
}
	
	

