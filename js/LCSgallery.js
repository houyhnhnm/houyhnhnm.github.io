var inputparsing=JSON.parse($('script[src="http://houyhnhnm.github.io/js/LCSgallery.js"]').html());
var LCSWbase=inputparsing.LCSIWIDTH;
var LCSHbase=inputparsing.LCSIHEIGHT;
var LCSTbase=inputparsing.LCSITIME;


var globalinterval;
var ticker=1;
var lastset=0; 
function LCSinit(){
	var element=document.getElementById("LCStable");
	var index;
	for( index=0; index< Number(element.rows[0].cells.length); index++){
		if(index==0)
		{
			element.rows[0].cells[index].style.display="table-cell";
		}
		else if(index<element.rows[0].cells.length)
		{
			element.rows[0].cells[index].style.display="none";
		}
		else
		{
		}
	}
}

function LCSefunc(){
	var element=document.getElementById("LCStable");
	var index;
	index=0;Number(element.rows[0].cells.length)-1;
	while(index<Number(element.rows[0].cells.length)){
		if(index==Number(element.rows[0].cells.length)-1){
		}
		else if((String(element.rows[0].cells[index].style.display).search("none")!=-1)&&(String(element.rows[0].cells[index+1].style.display).search("none")==-1)){
			element.rows[0].cells[index].style.display="table-cell";
			element.rows[0].cells[index+1].style.display="none";
		}
		else{
		}
		index++;
	}
}

function LCSLfunc(){
	var element=document.getElementById("LCStable");
	var index;
	index=Number(element.rows[0].cells.length)-1;
	while(index>=0){
		if(index==0){
		}
		else if((String(element.rows[0].cells[index].style.display).search("none")!=-1)&&(String(element.rows[0].cells[index-1].style.display).search("none")==-1)){
			element.rows[0].cells[index].style.display="table-cell";
			element.rows[0].cells[index-1].style.display="none";
		}
		else{
		}
		index--;
	}
}

function LCScycler(){
	if(String(document.getElementById("LCStable").rows[0].cells[0].style.display).search("none")==-1){
		if(lastset!=0){
			lastset=0;
		}
	}
	else if(String(document.getElementById("LCStable").rows[0].cells[Number(document.getElementById("LCStable").rows[0].cells.length)-1].style.display).search("none")==-1){
		if(lastset!=1){
			lastset=1;
		}
	}
	else{
	}
	if(lastset==0){
		LCSLfunc();
	}
	else if(lastset==1){
		LCSefunc();
	}
	else{
	}
}
function LCSpfunc(){
	if(ticker==1)
	{
		clearInterval(globalinterval);
		ticker=0;
		document.getElementById("LCSpause").innerHTML="Cycle";
	}
	else if(ticker==0){
		globalinterval=setInterval(function () {LCScycler()}, Number(LCSTbase)*1000);
		ticker=1;
		document.getElementById("LCSpause").innerHTML="Pause";
	}
}

function myFunction(arr) {
	var out = "<table id=\"LCStable\" style=\"margin:auto;\"><tr>";
	var i=0;
	var subtext;
	while( arr.query.results.elementlist.item[i] && i<10) {
		out += "<td style=\"display:none;text-align:center;\"><a href=\"https://plus.google.com/b/113017478177192749610/collection/kuZ7a\" target=_blank\"><p><u> Lets Chat Soccer </u></p></a><div style=\"overflow:auto;height: ";
		out +=LCSHbase;
		out +="px;width: ";
		out +=LCSWbase;
		out +="px\" ><a href=\"";
		out +=arr.query.results.elementlist.item[i].link;
		out +="\" target=\"_blank\"><p>";
		subtext=String(arr.query.results.elementlist.item[i].description);
		if(subtext.match(/^.[^\.]+\./g)==null || subtext.length<35){
			out += subtext;
		}
		else{
			if(subtext.match(/^.[^\.]+\.[^\.]+\./g)==null){
				out += 	subtext.match(/^.[^\.]+\./g)[0];
			}
			else{
				out +=subtext.match(/^.[^\.]+\.[^\.]+\./g)[0];
			}	
		}
		out +="</p></a></div></td>";
		i++;
	}
	out += "</tr></table><p style=\"text-align:center;\"><b id=\"LCSearly\" onclick=\"LCSefunc()\" > Earlier </b><b id=\"LCSLater\" onclick=\"LCSLfunc()\" > Later </b><b id=\"LCSpause\" onclick=\"LCSpfunc()\" > Pause </b></p>";
	document.getElementById("LCSspace").innerHTML = out;
	LCSinit();
	globalinterval=setInterval(function () {LCScycler()}, Number(LCSTbase)*1000);
}


var xmlhttp = new XMLHttpRequest();
var url = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FG3zHq72fch2xSNs1J2QMY1%22%20as%20LetsChatSoccerFeed%3B%20SELECT%20*%20FROM%20LetsChatSoccerFeed%20WHERE%20feedtype%3D%221%22&format=json&callback=";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myArr = JSON.parse(xmlhttp.responseText);
		myFunction(myArr);
	}
}


xmlhttp.open("GET", url, true);
xmlhttp.send();
