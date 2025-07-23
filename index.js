var linkArray = [
			//Splatoon
			link('k2N9rVrIb6s'), //Three Wishes
			link('m4wvwTr_jDM'), //Rainbow Color Inkantation
			link('5L1ddMgCfAc'), //Suffer No Fools
			link('nZHz9fnO7Ko'), //Anarchy Rainbow Springfest
			link('vlv7HV2lPQI'), //Anarchy Rainbow LIVE 2022
			//Sonic
			link('J-ykAmdtOYI'), //Arid Sands Day
			link('UxbyOQgTsVc'), //Seven Rings in Hand
			link('4KkQCxXUEBQ'), //Free
			//Other Games
			link('ryp-CqIfeX4'), //Beach Overworld 2012 <- private?
			link('ABPavPWpsCw'), //Sticker Star Event Battle
			//Misc
			link('GmfwI0vDy68'), //On the FM
			link('R4WDXeGtwYQ'), //LeJeune
			link('8TAuh7HGUss'), //Myoisia
			link('3wm3Xr3OY3M'), //One More Lovely
			];
var UPDATESLIST = [
// FORMAT: TITLE, [BULLET POINTS, AS AN ARRAY]
["23 July 2025", ["added an information box to the landing page!"]],
["21 July 2025", ["more css to the collection stuff! main page SHOULD be done essentially. might add more images at some point", "added a return button to the collection page!!", "sonadow section is up and pretty much running !!!"]],
["19 July 2025", ["Made some minor tweaks to the MKWii stuff in the collection page. css is a lot better now !!", "MKWii popup is real!!!!", "its like 5am sorry i cant add anything else rn......."]],
["17 July 2025", ["Updates box looks a little better. date is easier to see", "Formally changed the theme for the collection page!!", "Added a TON of css presets for me to use for the collection stuff later", "Collection pages are now actually in progress woah!!!! noway!!!"]],
["16 July 2025", ["Hey guys, now you can see just the newest update!!! and scroll!!!!", "Art filters are back !!!!!!!", "Weird stuff was happening with the art but it is now reliable", "art2 is now css'd pretty well i think!! need assets"]],
["15 July 2025", ["Fixed the css that bugged me on the landing page and made it more accurate", "Made css on profile page more accurate and added proper tabs for pages!!", "Added in all the pages for the profile!! will need to fill them out later with the correct information but it should be okay", "Addition of filters on the art part is in progress!!!", "Art2 has been created...."]],
["16 Sept 2024", ["Added in most of the artwork","Added fonts to art page, in credits","Kind of CSS'd the art page to what it will look like (too lazy for assets right now)"]],
["10 Sept 2024",["Began CSS'ing the art page","Fixed readme to what I've got planned so far, less speculation"]],
["09 Sept 2024", ["Index is basically css'd! Guess where it's from :D (need to figure out fonts and titles)","Added an easier way to add updates","Fixed buttons on the shelf page. Still need assets","Added a credits page to keep track of assets and fonts used. As of now it is conprehensive"]],
["08 Sept 2024", ["Showcase partially css'd - some issues came about", "Index partially css'd - assets required","Added custom cursors for all pages but art"]],
["07 Sept 2024", ["Profile is now css'd! Go take a look"]],
["04 Sept 2024", ["Fixed display for the art page","About me no longer squishes and is now readable on mobile"]],
["03 Sept 2024", ["Finished main HTML for the about me page","Added some more music","Worked and completed a function for the art page (remember when i had to manually put art in? not anymore :D)","Added a way back to the new site from the legacy site"]],
["02 Sept 2024", ["Fixed the menu bar so it doesn't cover the header","Added links to future pages","Added the music box","Added a way to reach the legacy site"]]
];

var index = 0;

function link(embedID) {
				return 'https://www.youtube.com/embed/' + embedID;
			}
function randomSong() {
				const song = Math.floor(Math.random() * linkArray.length);
				document.getElementById("songLink").src = linkArray[song];
			}
function crementUpdate(movement) {
	if (movement == 1) {
		if (index < UPDATESLIST.length-1) {
			index++;
			createUpdate(UPDATESLIST, index);
		}
	}
	if (movement == -1) {
		if (index > 0) {
			index--;
			createUpdate(UPDATESLIST, index);
		}
	}
}
function createUpdate(fullArray, entry) {
	var i;
	workingArray = fullArray[entry];
	ils = "";
		for (i=0; i<workingArray[1].length; i++) {
			ils += '<li>' + workingArray[1][i] + '</li>';
		}
		updateDate = '<p>' + workingArray[0] + '</p>';
		updateCode ='<div class="updatebox"><ul>' + ils + '</ul>';
		document.getElementById("UPD_D").innerHTML = updateDate;
		document.getElementById("UPD").innerHTML = updateCode;
	}
function startUp() {
				// countSong
				document.getElementById("counterp").textContent = linkArray.length;
				
				// loadUpdates
				createUpdate(UPDATESLIST, index);
				}