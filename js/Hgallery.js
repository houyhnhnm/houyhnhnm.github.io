var inputparsing=JSON.parse($('script[src="http://houyhnhnm.github.io/js/Hgallery.js"]').html());
var HLbase=inputparsing.HL;
var HWbase=inputparsing.HW;
var HQbase=inputparsing.HQ;
var HTbase=inputparsing.HT;
var HRSSbase=inputparsing.Hrss;

var globalinterval;
var ticker=1;
var lastset=0; 
function Hinit(){
	var element=document.getElementById("Htable");
	var index;
	for( index=0; index< Number(element.rows[0].cells.length); index++){
		if(index<Number(HQbase))
		{
			element.rows[0].cells[index].style.display="table-cell";
		}
		else
		{
			element.rows[0].cells[index].style.display="none";
		}
	}
}

function Hefunc(){
	var element=document.getElementById("Htable");
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

function HLfunc(){
	var element=document.getElementById("Htable");
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

function Hcycler(){
	if(String(document.getElementById("Htable").rows[0].cells[0].style.display).search("none")==-1){
		if(lastset!=0){
			lastset=0;
		}
	}
	else if(String(document.getElementById("Htable").rows[0].cells[Number(document.getElementById("Htable").rows[0].cells.length)-1].style.display).search("none")==-1){
		if(lastset!=1){
			lastset=1;
		}
	}
	else{
	}
	if(lastset==0){
		HLfunc();
	}
	else if(lastset==1){
		Hefunc();
	}
	else{
	}
}
function Hpfunc(){
	if(ticker==1)
	{
		clearInterval(globalinterval);
		ticker=0;
		document.getElementById("Hpause").innerHTML="Cycle";
	}
	else if(ticker==0){
		globalinterval=setInterval(function () {Hcycler()}, Number(HLbase)*1000);
		ticker=1;
		document.getElementById("Hpause").innerHTML="Pause";
	}
}

function myFunction(arr) {
	var out = "<p style=\"text-align:center\"><u>"+HTbase+"</u></p><table id=\"Htable\" style=\"margin:auto\"><tr>";
	var i;
	for(i = 0; i < Number(arr.query.count); i++) {
		out += "<td style=\"display: none;\" ><a href=\"";
		out +=arr.query.results.item[i].link;
		out +="\" target=\"_blank\"><img src=\"";
		var subs=arr.query.results.item[i].description;
		//out += subs.match(/http[^"]+/)[0];
		if(subs.match(/http[^"]+/)==null){}
		else{
			out+=subs.match(/http[^"]+/);
		}
		//out += subs.match(/http[^"]+/)[0];
		out += "\" width=\"";
		out += HWbase;
		out +="px\"></img></a></td>";
	}
	out += "</tr></table><p style=\"text-align:center;\"><b id=\"Hearly\" onclick=\"Hefunc()\" > Earlier </b><b id=\"HLater\" onclick=\"HLfunc()\" > Later </b><b id=\"Hpause\" onclick=\"Hpfunc()\" > Pause </b></p>";
	document.getElementById("Hdivspace").innerHTML = out;
	Hinit();
	globalinterval=setInterval(function () {HLfunc()}, Number(HLbase)*1000);
}


var xmlhttp = new XMLHttpRequest();
var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'"+decodeURIComponent(HRSSbase)+"'&format=json&callback=";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myArr = JSON.parse(xmlhttp.responseText);
		myFunction(myArr);
	}
}


xmlhttp.open("GET", url, true);
xmlhttp.send();
