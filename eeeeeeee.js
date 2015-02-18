var eChar ='e';

function e_toElement(span, num) {
	var e_string = "";
	var transform = ["",
	                 "rotate(90deg)",
	                 "rotate(180deg)",
	                 "rotate(-90deg)",
	                 "scaleX(-1)",
	                 "scaleX(-1) rotate(90deg)",
	                 "scaleX(-1) rotate(180deg)",
	                 "scaleX(-1) rotate(-90deg)"];
	for(var i=0; i < num.length; i++) {
		e_string += '<span class="e" style="transform: ' + transform[num[i]] + '; display: inline-block;">' + eChar + '</span>';
	}
	span.innerHTML = e_string;
}

function to_base8(base10) {
	return base10.toString(8);
}