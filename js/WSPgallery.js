var inputparsing2=JSON.parse($('script[src="http://houyhnhnm.github.io/js/WSPgallery.js"]').html());
var WSPWbase=inputparsing2.WSPIWIDTH;
var WSPHbase=inputparsing2.WSPIHEIGHT;
var WSPTbase=inputparsing2.WSPITIME;
var WSPIndexBase;
var url2;
var mainname;
var mainlink;
if(inputparsing2.WSPIndex){
	if(Number(inputparsing2.WSPIndex)>=0 && Number(inputparsing2.WSPIndex)<=19){
		WSPIndexBase=inputparsing2.WSPIndex;
	}
	else{
		WSPIndexBase=0
	}
}
else{
	WSPIndexBase=0;
}
var globalinterval2;
var ticker2=1;
var lastset2=0; 
function WSPinit(){
	var element=document.getElementById("WSPtable");
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

function WSPefunc(){
	var element=document.getElementById("WSPtable");
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

function WSPLfunc(){
	var element=document.getElementById("WSPtable");
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

function WSPcycler(){
	if(String(document.getElementById("WSPtable").rows[0].cells[0].style.display).search("none")==-1){
		if(lastset2!=0){
			lastset2=0;
		}
	}
	else if(String(document.getElementById("WSPtable").rows[0].cells[Number(document.getElementById("WSPtable").rows[0].cells.length)-1].style.display).search("none")==-1){
		if(lastset2!=1){
			lastset2=1;
		}
	}
	else{
	}
	if(lastset2==0){
		WSPLfunc();
	}
	else if(lastset2==1){
		WSPefunc();
	}
	else{
	}
}
function WSPpfunc(){
	if(ticker2==1)
	{
		clearInterval(globalinterval2);
		ticker2=0;
		document.getElementById("WSPpause").innerHTML="Cycle";
	}
	else if(ticker2==0){
		globalinterval2=setInterval(function () {WSPcycler()}, Number(WSPTbase)*1000);
		ticker2=1;
		document.getElementById("WSPpause").innerHTML="Pause";
	}
}

function myFunction2(arr2) {
	var out = "<table id=\"WSPtable\" style=\"margin:auto;\"><tr>";
	var i=0;
	var subtext;
	var tmarker=false;
	while( i<10 ) {
		try{
			if(
				String(arr2.query.results.itemlist.items[i].item.uurl).length>0 && 
				String(arr2.query.results.itemlist.items[i].item.uname).length>0 && 
				String(arr2.query.results.itemlist.items[i].item.uimage).length>0 && 
				String(arr2.query.results.itemlist.items[i].item.purl).length>0 && 
				String(arr2.query.results.itemlist.items[i].item.pdate).length>0 && 
				String(arr2.query.results.itemlist.items[i].item.pbody).length>0 
			){
				if(tmarker==false){
					tmarker=true;
				}
				else{
				}
				out += "<td style=\"display:none;text-align:center;\"><a href=\""+mainlink+"\" target=_blank\"><p><u> "+mainname+" </u></p></a><div style=\"overflow:auto;height: ";
				out +=WSPHbase;
				out +="px;width: ";
				out +=WSPWbase;
				out +="px\" >";
				out +="<a href=\""+arr2.query.results.itemlist.items[i].item.uurl +"\" target=\"_blank\"><img title=\""+ arr2.query.results.itemlist.items[i].item.uname +"\" src=\""+ arr2.query.results.itemlist.items[i].item.uimage +"\" ></img></a> ";
				out +="<a href=\"";
				out +=arr2.query.results.itemlist.items[i].item.purl;
				out +="\" target=\"_blank\"><p title=\"+ arr2.query.results.itemlist.items[i].item.pdate+\" >";
				subtext=String(arr2.query.results.itemlist.items[i].item.pbody);
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
			}
			else{
				//do nothing, yet content hold more value
			}
		}
		catch(err){
			out += "<td>"+err.message+"</td>"//
		}
		i++;
	}
	out += "</tr></table>";
	if(tmarker==true){
		out +="<p style=\"text-align:center;\"><b id=\"WSPearly\" onclick=\"WSPefunc()\" > Earlier </b><b id=\"WSPLater\" onclick=\"WSPLfunc()\" > Later </b><b id=\"WSPpause\" onclick=\"WSPpfunc()\" > Pause </b></p>";
	}
	else{
	}
	document.getElementById("WSPspace").innerHTML = out;
	WSPinit();
	globalinterval2=setInterval(function () {WSPcycler()}, Number(WSPTbase)*1000);
}


var xmlhttp2 = new XMLHttpRequest();
if(Number(WSPIndexBase)==0){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'0'&format=json";
	mainname="Womens Soccer Plus - most recent";
	mainlink="https://plus.google.com/communities/114953854665899342269";
}
else if(Number(WSPIndexBase)==1){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'1'&format=json";
	mainname="Womens Soccer Plus - transfers";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/167bd732-b3c3-432f-b32b-1a882f313958";
}
else if(Number(WSPIndexBase)==2){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'2'&format=json";
	mainname="Womens Soccer Plus - coaches corner";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/be2dd7b4-c8ab-4b93-aca9-a9f8134a2e98";
}
else if(Number(WSPIndexBase)==3){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'3'&format=json";
	mainname="Womens Soccer Plus - world cup/olympics";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/05b007d2-3d64-4077-a363-bc104307e291";
}
else if(Number(WSPIndexBase)==4){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'4'&format=json";
	mainname="Womens Soccer Plus - international friendlies";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/b447e99f-25ed-406f-9d47-240d518cf613";
}
else if(Number(WSPIndexBase)==5){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'5'&format=json";
	mainname="Womens Soccer Plus - Club World Cup";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/691ae95c-29d6-49ec-9581-5e9072096a9e";
}
else if(Number(WSPIndexBase)==6){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'6'&format=json";
	mainname="Womens Soccer Plus - Frauen Fussball";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/d79263a2-c846-4f67-9213-c6c86ad13b5b";
}
else if(Number(WSPIndexBase)==7){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'7'&format=json";
	mainname="Womens Soccer Plus - FA Ladies Soccer";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/79314706-9b45-4ecb-84ce-2074dbee3d73";
}
else if(Number(WSPIndexBase)==8){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'8'&format=json";
	mainname="Womens Soccer Plus - Calcio Femminile";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/040776e1-ae8d-4900-b657-24a1f67bd701";
}
else if(Number(WSPIndexBase)==9){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'9'&format=json";
	mainname="Womens Soccer Plus - Football Feminine";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/67309997-d9b5-4b79-9344-0084a680d9ac";
}
else if(Number(WSPIndexBase)==10){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'10'&format=json";
	mainname="Womens Soccer Plus - Damallsvenskan- Sweden";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/0c78f0ce-28b5-4065-81ab-f942c76c14df";
}
else if(Number(WSPIndexBase)==11){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'11'&format=json";
	mainname="Womens Soccer Plus - Toppserien- Norway";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/76771164-52c1-4674-9a63-d3e8797e1196";
}
else if(Number(WSPIndexBase)==12){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'12'&format=json";
	mainname="Womens Soccer Plus - UEFA EUROS";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/2940770f-4d10-4d07-9d23-78d911cc8a7e";
}
else if(Number(WSPIndexBase)==13){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'13'&format=json";
	mainname="Womens Soccer Plus - UEFA SOCCER";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/840d445e-0e32-4096-8036-052a31e46d40";
}
else if(Number(WSPIndexBase)==14){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'14'&format=json";
	mainname="Womens Soccer Plus - CAF SOCCER";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/f4e3bd0c-de05-43d3-a678-6d57a8073e16";
}
else if(Number(WSPIndexBase)==15){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'15'&format=json";
	mainname="Womens Soccer Plus - CONMEBOL SOCCER";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/fa99932d-e901-46aa-9d4c-599e7b9c9d97";
}
else if(Number(WSPIndexBase)==16){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'16'&format=json";
	mainname="Womens Soccer Plus - CONCACAF SOCCER";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/6200b533-2f84-45b2-9f64-757a904c7993";
}
else if(Number(WSPIndexBase)==17){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'17'&format=json";
	mainname="Womens Soccer Plus - AFC SOCCER";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/578537f2-e774-4f14-b398-51934079a2d1";
}
else if(Number(WSPIndexBase)==18){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'18'&format=json";
	mainname="Womens Soccer Plus - The Business Side";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/ee349802-242c-4e4f-ac29-4b62217001e6";
}
else if(Number(WSPIndexBase)==19){
	url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'19'&format=json";
	mainname="Womens Soccer Plus - From Female Fans";
	mainlink="https://plus.google.com/communities/114953854665899342269/stream/a785b3e9-31c7-4052-a10f-39332d13ac32";
}
else{
}

xmlhttp2.onreadystatechange = function() {
	if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
		var myArr = JSON.parse(xmlhttp2.responseText);
		myFunction2(myArr);
	}
}


xmlhttp2.open("GET", url2, true);
xmlhttp2.send();
