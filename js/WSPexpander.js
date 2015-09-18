function WSPresetter(){
	var selectval = document.getElementById("wspselectval").options[document.getElementById("wspselectval").selectedIndex].value;
	var tmark=false;
	var embedtext="";
	if(Number(selectval)==0){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'0'&format=json";
		mainname="Womens Soccer Plus - most recent";
		mainlink="https://plus.google.com/communities/114953854665899342269";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 0}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==1){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'1'&format=json";
		mainname="Womens Soccer Plus - transfers";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/167bd732-b3c3-432f-b32b-1a882f313958";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 1}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==2){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'2'&format=json";
		mainname="Womens Soccer Plus - coaches corner";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/be2dd7b4-c8ab-4b93-aca9-a9f8134a2e98";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 2}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==3){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'3'&format=json";
		mainname="Womens Soccer Plus - world cup/olympics";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/05b007d2-3d64-4077-a363-bc104307e291";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 3}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==4){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'4'&format=json";
		mainname="Womens Soccer Plus - international friendlies";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/b447e99f-25ed-406f-9d47-240d518cf613";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 4}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==5){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'5'&format=json";
		mainname="Womens Soccer Plus - Club World Cup";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/691ae95c-29d6-49ec-9581-5e9072096a9e";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 5}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==6){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'6'&format=json";
		mainname="Womens Soccer Plus - Frauen Fussball";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/d79263a2-c846-4f67-9213-c6c86ad13b5b";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 6}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==7){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'7'&format=json";
		mainname="Womens Soccer Plus - FA Ladies Soccer";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/79314706-9b45-4ecb-84ce-2074dbee3d73";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 7}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==8){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'8'&format=json";
		mainname="Womens Soccer Plus - Calcio Femminile";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/040776e1-ae8d-4900-b657-24a1f67bd701";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 8}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==9){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'9'&format=json";
		mainname="Womens Soccer Plus - Football Feminine";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/67309997-d9b5-4b79-9344-0084a680d9ac";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 9}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==10){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'10'&format=json";
		mainname="Womens Soccer Plus - Damallsvenskan- Sweden";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/0c78f0ce-28b5-4065-81ab-f942c76c14df";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 10}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==11){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'11'&format=json";
		mainname="Womens Soccer Plus - Toppserien- Norway";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/76771164-52c1-4674-9a63-d3e8797e1196";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 11}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==12){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'12'&format=json";
		mainname="Womens Soccer Plus - UEFA EUROS";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/2940770f-4d10-4d07-9d23-78d911cc8a7e";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 12}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==13){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'13'&format=json";
		mainname="Womens Soccer Plus - UEFA SOCCER";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/840d445e-0e32-4096-8036-052a31e46d40";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 13}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==14){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'14'&format=json";
		mainname="Womens Soccer Plus - CAF SOCCER";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/f4e3bd0c-de05-43d3-a678-6d57a8073e16";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 14}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==15){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'15'&format=json";
		mainname="Womens Soccer Plus - CONMEBOL SOCCER";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/fa99932d-e901-46aa-9d4c-599e7b9c9d97";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 15}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==16){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'16'&format=json";
		mainname="Womens Soccer Plus - CONCACAF SOCCER";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/6200b533-2f84-45b2-9f64-757a904c7993";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 16}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==17){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'17'&format=json";
		mainname="Womens Soccer Plus - AFC SOCCER";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/578537f2-e774-4f14-b398-51934079a2d1";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 17}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==18){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'18'&format=json";
		mainname="Womens Soccer Plus - The Business Side";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/ee349802-242c-4e4f-ac29-4b62217001e6";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 18}</script><div  id="WSPspace"></div>';
	}
	else if(Number(selectval)==19){
		url2 = "https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FXVOGU1zLFArXpWlap8TKFp%22%20as%20WSPlusfeed%3B%20SELECT%20*%20FROM%20WSPlusfeed%20where%20sector%3D'19'&format=json";
		mainname="Womens Soccer Plus - From Female Fans";
		mainlink="https://plus.google.com/communities/114953854665899342269/stream/a785b3e9-31c7-4052-a10f-39332d13ac32";
		embedtext='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://houyhnhnm.github.io/js/WSPgallery.js">{"WSPIWIDTH": 300,"WSPIHEIGHT": 100, "WSPITIME": 5, "WSPIndex": 19}</script><div  id="WSPspace"></div>';
	}
	else{
		tmark=true;
	}

	if(tmark==false){
		xmlhttp2.open("GET", url2, true);
		xmlhttp2.send();
		document.getElementById("WSPcopy").value=embedtext+"<!-- PLEASE READ You only need to copy the jquery once if you have embed both Womens Soccer Plus aside Lets Chat Soccer-->";
	}
	else{
		//do nothing
	}
}