var popUp;
function displayPop(myId) {
	var popUp = document.getElementById(myId);
	popUp.style.display = "block";
	window.onclick = function(event) {
		if (event.target == popUp) {
			popUp.style.display = "none";
		}
	}
}