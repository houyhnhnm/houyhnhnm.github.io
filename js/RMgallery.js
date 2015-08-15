var inputparsing=JSON.parse($('script[src="http://houyhnhnm.github.io/js/RMgallery.js"]').html())
var RMHLbase=inputparsing.RMHL;
var RMHWbase=inputparsing.RMHW;
var RMHQbase=inputparsing.RMHQ;

var globalinterval;
var ticker=1;
var lastset=0; 
function RMHinit(){
	var element=document.getElementById("RMHtable");
	var index;
	for( index=0; index< Number(element.rows[0].cells.length); index++){
		if(index<Number(RMHQbase))
		{
			element.rows[0].cells[index].style.display="table-cell";
		}
		else
		{
			element.rows[0].cells[index].style.display="none";
		}
	}
}

function RMHefunc(){
	var element=document.getElementById("RMHtable");
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

function RMHLfunc(){
	var element=document.getElementById("RMHtable");
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

function RMHcycler(){
	if(String(document.getElementById("RMHtable").rows[0].cells[0].style.display).search("none")==-1){
		if(lastset!=0){
			lastset=0;
		}
	}
	else if(String(document.getElementById("RMHtable").rows[0].cells[Number(document.getElementById("RMHtable").rows[0].cells.length)-1].style.display).search("none")==-1){
		if(lastset!=1){
			lastset=1;
		}
	}
	else{
	}
	if(lastset==0){
		RMHLfunc();
	}
	else if(lastset==1){
		RMHefunc();
	}
	else{
	}
}
function RMHpfunc(){
	if(ticker==1)
	{
		clearInterval(globalinterval);
		ticker=0;
		document.getElementById("RMHpause").innerHTML="Cycle";
	}
	else if(ticker==0){
		globalinterval=setInterval(function () {RMHcycler()}, Number(RMHLbase)*1000);
		ticker=1;
		document.getElementById("RMHpause").innerHTML="Pause";
	}
}

function myFunction(arr) {
	var out = "<p style=\"text-align:center\"><u>RICHARD MURRAY HUMBLR GALLERY</u></p><table id=\"RMHtable\" style=\"margin:auto\"><tr>";
	var i;
	for(i = 0; i < Number(arr.query.count); i++) {
		out += "<td style=\"display: none;\" ><a href=\"";
		out +=arr.query.results.item[i].link;
		out +="\" target=\"_blank\"><img src=\"";
		var subs=arr.query.results.item[i].description;
		out += subs.match(/http[^"]+/)[0];
		out += "\" width=\"";
		out += RMHWbase;
		out +="px\"></img></a></td>";
	}
	out += "</tr></table><p style=\"text-align:center;\"><b id=\"RMHearly\" onclick=\"RMHefunc()\" > Earlier </b><b id=\"RMHLater\" onclick=\"RMHLfunc()\" > Later </b><b id=\"RMHpause\" onclick=\"RMHpfunc()\" > Pause </b></p>";
	document.getElementById("RMHdivspace").innerHTML = out;
	RMHinit();
	globalinterval=setInterval(function () {RMHLfunc()}, Number(RMHLbase)*1000);
}


var xmlhttp = new XMLHttpRequest();
var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Frichardmurrayhumblr.tumblr.com%2Frss'&format=json&callback=";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myArr = JSON.parse(xmlhttp.responseText);
		myFunction(myArr);
	}
}

xmlhttp.open("GET", url, true);
xmlhttp.send();