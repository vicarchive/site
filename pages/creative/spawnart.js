function createEntries(name) {
	if (name === 'art') {
		// FORMAT: DIRECTORY, FILTERS, DATE, TITLE, DESCRIPTION
		allArt = [
			["d_normal/2024,09,14.png","splatoon","09/14/2024","Callie",""],
			["d_normal/2024,09,06.png","splatchao","09/06/2024","Proper Render",""],
			["d_normal/2024,06,01.png","other","06/01/2024","Snorpy & Chandlo","From Bugsnax."],
			["d_normal/2024,05,26.png","splatchao","05/26/2024","Hammerhead Bridge Rework",""],
			["d_normal/2024,04,08.PNG","other","04/08/2024","Sam & Max: Shitass Police",""],
			["d_normal/2024,04,03.PNG","splatchao","04/03/2024","Amy & Blaze Concept Render",""],
			["d_normal/2024,03,15.PNG","splatchao","03/15/2024","S2 Render Sonic & Shadow",""],
			["d_normal/2024,03,08.PNG","other","03/08/2024","Side Eye Maya",""],
			["d_normal/2024,02,26.png","splatchao","02/26/2024","Shadow S2 Outfit",""],
			["d_normal/2024,02,03.png","splatoon","02/03/2024","Splatoon Style Test",""],
			["d_normal/2024,01,20.PNG","splatchao","01/20/2024","Sonic Solo Album Concept",""],
			["d_normal/2024,01,16.png","splatchao","01/16/2024","S2 Performance Concept",""],
			["d_normal/2024,01,10.PNG","splatchao","01/10/2024","Splatchao Low Quality Intro",""],
			["d_normal/2024,01,09.PNG","splatchao","01/09/2024","S2 Outfits",""],
			["d_normal/2023,12,25.PNG","sonic","12/25/2023","SA2 Render",""],
			["d_normal/2023,12,17.PNG","splatoon","12/17/2023","Shiver",""],
			["d_normal/2023,12,12.PNG","attorney","12/12/2023","Klapollo","He plays his guitar for his boyfriend."],
			["d_normal/2023,12,06.PNG","attorney","12/06/2023","Maya Fey",""],
			["d_normal/2023,11,25.PNG","sonic","11/25/2023","DTYS","Started an Instagram around this time."],
			["d_normal/2023,11,13.png","splatchao","11/13/2023","Smile Test","Trying to see how Shadow smiles."],
			["d_normal/2023,11,12.png","splatchao","11/12/2023","S3 Cover Concept",""],
			["d_normal/2023,10,28.PNG","sonic","10/28/2023","Orange","Got bored and tried making Sonic in the Splatoon style."],
			["d_normal/2023,10,28,1.PNG","splatchao","10/28/2023","Agent 3",""],
			["d_normal/2023,10,23.PNG","sonic","10/23/2023","Sonic Pomni",""],
			["d_normal/2023,10,23,1.PNG","splatchao","10/23/2023","Chaoween",""],
			["d_normal/2023,09,19.PNG","splatchao","09/19/2023","Proper Render 1",""],
			["d_normal/2023,09,19,1.PNG","splatoon","09/19/2023","Stay Fresh",""],
			["d_normal/2023,09,13.PNG","splatchao","09/13/2023","Tomorrow's Nostalgia Today",""],
			["d_normal/2023,08,23.PNG","splatchao","08/23/2023","First Render","Tried something similar to the Squid Sisters S1 Render."],
			["d_normal/2023,08,22.PNG","sonic","08/22/2023","Live Sonic Reaction","Live Sonic Reaction"],
			["d_normal/2023,08,22,1.PNG","splatchao","08/22/2023","Story Mode Icons","Quick sketches."],
			["d_normal/2023,08,20.PNG","other","08/20/2023","Mittopia, 3 out of 3","Tank"],
			["d_normal/2023,08,08.PNG","other","08/08/2023","Miitopia, 1 out of 3","Warrior"],
			["d_normal/2023,08,06.PNG","other","08/06/2023","Miitopia, 2 out of 3","Cat"],
			["d_normal/2023,06,04.PNG","splatchao","06/04/2023","Player Characters",""],
			["d_normal/2023,06,02.PNG","sonic","06/02/2023","SA2's 22nd Birthday",""],
			["d_normal/2023,05,24.PNG","splatchao","05/24/2023","Final Splatchao Designs",""],
			["d_normal/2023,05,08.PNG","splatoon","05/08/2023","Deep Cut",""],
			["d_normal/2023,05,03.PNG","sonic","05/03/2023","Shipwrecked","From a Meriner May prompt."],
			["d_normal/2023,05,01.PNG","sonic","05/01/2023","Shadow","This is based off of something I wrote."],
			["d_normal/2023,04,21.JPG","sonic","04/21/2023","Shadow Chaos Control",""],
			["d_normal/2023,04,10.png","splatchao","04/10/2023","Old Splatchao Render","Rendered something quick."],
			["Fdw7tJTL094","splatchao","04/02/2023","Old Splatchao Designs Animation","Made animations for their second designs."],
			["d_normal/2023,03,08.png","splatchao","03/08/2023","First Splatchao Designs","Original concept art of the two of them."],
			["D8Ubo17WtT4", "splatoon","02/27/2023","Off the Hook Animation","Duik Bassel 2 Animation of Off the Hook."],
			["zi-x1XRUqY4", "sonic","11/24/2022", "Shadow SA2 Animation","Companion animation to Sonic."],
			["v8skw7CQODI","sonic","11/18/2022","Sonic SA2 Animation","Made using After Effects and Duik Bassel 2."],
			["pfkRTlAOrwQ","sonic","10/29/2021","Shadow Cookie","Made using After Effects and puppet tools."]
		];
		// FILTERS: SONIC, SPLATOON, SPLATCHAO, ATTORNEY, OTHER
		allArt.map(makeArt);
	}
	if (name === 'sonadow') {
		// FORMAT: DIRECTORY, DATE, TITLE, DESCRIPTION
		allArt = [
			["d_sonadow/2024,04,16.PNG", "04/16/2024", "Bang Bang!!", "can you believe a sam & max animation introduced me to this song?? me neither"],
			["d_sonadow/2024,03,04.PNG", "03/04/2024", "Scene14", "apparently this is from a manga idk i saw this on insta and wanted to draw it"],
			["d_sonadow/2024,02,22.png", "02/22/2024", "Newlyweds", "this is for the ace attorney fans this time HII TGAA1 REFERENCE"],
			["d_sonadow/2024,02,19.png", "02/19/2024", "Valentine's Day", "based on those wallpaper memes that were going around where you make a heart w your partner"],
			["d_sonadow/2023,11,09.png", "11/09/2023", "Run and Hug", "apparently this is called a glomp idk hes just happy to see him"],
			["d_sonadow/2023,11,07.PNG", "11/07/2023", "Yin Yang", "hello splatoon fans? knock knock come get your splatoon reference"],
			["d_sonadow/2023,10,30.PNG", "10/30/2023", "From Afar", "sighs and stares at them with googley eyes"],
			["d_sonadow/2023,10,06.PNG", "10/06/2023", "Sketches", "idk i think some of these are still good"],
			["d_sonadow/2023,09,27.PNG", "09/27/2023", "Midnight Kiss", "this came from a 3am sketch"],
			["d_sonadow/2023,09,17.PNG", "09/17/2023", "Wedding March", "look at them. nothing else matters but them"],
			["d_sonadow/2023,09,08.PNG", "09/08/2023", "Tropical Waters", "spacecolonie made a olympics 2020 piece that inspired this because the water was so pretty"],
			["d_sonadow/2023,09,04.PNG", "09/04/2023", "&quot;Can we do something fun?&quot;", "&quot;We did something fun last night. Go to bed.&quot;"],
			["d_sonadow/2023,07_08.PNG", "July - August 2023", "idrk", "so bright and pretty. i dont see a date here so im not gonna go looking for it"],
			["d_sonadow/2023,07,18.PNG", "07/18/2023", "Spreading the Gospel", "came back to animal jam after almost a decade off the game"],
			["d_sonadow/2023,07,07.png", "07/07/2023", "SONADOW<<<", "this is based off an animate project i never really finished"],
			["d_sonadow/2023,06,01.PNG", "06/01/2023", "Pride Month 2023", "i used to have a tradition where i use a palette of colors for these which is why its so bright"],
			["d_sonadow/2023,05,12.PNG", "05/12/2023", "Boom At Night", "lighting practice that i still like"],
			["d_sonadow/2023,04,28.PNG", "04/28/2023", "Pool", "read this from a fanfic. still so good"]
		];
		allArt.map(makeSonadow);
	}
}

function makeArt(infoArray) {
	if (infoArray[0].includes("d_normal/")) {
		artCode = '<div class="filterDiv ' + infoArray[1] + ' show"><img id="IMG" src=' + infoArray[0] + '><div class="textholder"><p>' + infoArray[3] + '&nbsp;-&nbsp;' + infoArray[2]  + '</p><p class="desc">' + infoArray[4] + '</p></div></div>';
	} else {
		artCode = '<div class="filterDiv ' + infoArray[1] + ' show"><iframe id="IFR" src="https://www.youtube.com/embed/' + infoArray[0] + '" width="370" height="370"></iframe><div class="textholder"><p>' + infoArray[3] + '&nbsp;-&nbsp;' + infoArray[2]  + '</p><p class="desc">' + infoArray[4] + '</p></div></div>';
	}
	document.getElementById("artBlock").innerHTML += artCode;
}

function makeSonadow(infoArray) {
	if (infoArray[0].includes("d_sonadow/")) {
		artCode = '<div class="artbox" style="text-align:center;"><img id="IMG" src=' + infoArray[0] + '><div class="textholder"><p>' + infoArray[2] + '&nbsp;-&nbsp;' + infoArray[1]  + '</p><p class="desc">' + infoArray[3] + '</p></div></div>';
	} else {
		artCode = '<iframe id="IFR" src="https://www.youtube.com/embed/' + infoArray[0] + '" width="370" height="370"></iframe><div class="textholder"><p>' + infoArray[2] + '&nbsp;-&nbsp;' + infoArray[1]  + '</p><p class="desc">' + infoArray[3] + '</p></div></div>';
	}
	document.getElementById("artBlock").innerHTML += artCode;
}

function editArtFilter(desired) {
	function removeStyle(element, styleName) {
		var i, x, y;
		x = element.className.split(" ");
		y = styleName.split(" ");
		for (i=0; i<y.length; i++) {
			while (x.indexOf(y[i]) > -1) {
				x.splice(x.indexOf(y[i]), 1);
			}
		}
		element.className = x.join(" ");
	}
	function addStyle(element, styleName) {
		var i, x, y;
		x = element.className.split(" ");
		y = styleName.split(" ");
		for (i=0;i<y.length; i++) {
			if (x.indexOf(y[i]) == -1) {
				element.className += " " + y[i];
			}
		}
	}
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (desired == "all") desired="";
	for (i=0; i<x.length; i++) {
		removeStyle(x[i], "show");
		if (x[i].className.indexOf(desired) > -1) addStyle(x[i], "show");
	}
}
