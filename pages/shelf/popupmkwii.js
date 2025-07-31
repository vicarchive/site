var popUp, popUpInside;
function displayPop(myId) {
	var popUp = document.getElementById(myId);
	var popUpInside = document.getElementById("p" + myId);
	popUp.classList.add("show");
	popUpInside.classList.add("show");
	window.onclick = function(event) {
		if (event.target == popUp) {
			popUp.classList.remove("show");
			popUpInside.classList.remove("show");
		}
	};
}