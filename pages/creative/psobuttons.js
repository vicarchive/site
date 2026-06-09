function PSOButton(id, l, w) {
	// <path d="M 0 20 L 10 0 L 110 0 L 120 20 L 110 40 L 10 40 Z" fill="transparent" stroke-width="3px" stroke="black"/> => 120, 40
	halfl = l/2;
	halfw = w/2;
	pathCode = '<path d="M 0 '+halfw+' L 10 0 L 110 0 L 120 20 L 110 40 L 10 40 Z" fill="transparent" stroke-width="3px" stroke="black"/>';
	document.getElementById(id).innerHTML += pathCode;
}
