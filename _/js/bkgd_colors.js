//random RGB color
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
		}

	var h=window.innerHeight/5 + "px";

var app = {

	colorMachine: function() {
		var R = getRandomInt(0, 255);
		var G = getRandomInt(0, 255);
		var B = getRandomInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 0.8);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	},

	timeMachine:function(){
		var T = getRandomInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	},

	pageStyles: function(){
		$("div#1 h1").html(app.colorMachine());
			$("div#1").css({
			'background-color': app.colorMachine(),
			'height': h
			});

		$("div#2 h1").html(app.colorMachine());
		$("div#2").css({
			'background-color': app.colorMachine(),
			'height': h
			});

		$("div#3 h1").html(app.colorMachine());
		$("div#3").css({
			'background-color': app.colorMachine(),
			'height': h
			});

		$("div#4 h1").html(app.colorMachine());
		$("div#4").css({
			'background-color': app.colorMachine(),
			'height': h
			});

		$("div#5 h1").html(app.colorMachine());
		$("div#5").css({
			'background-color': app.colorMachine(),
			'height': h
			});

		$("div h1").css({
			'line-height': h
			});
	},

	init: function() {
		console.log("color 1: " + app.colorMachine());
		console.log("color 2: " + app.colorMachine());
		console.log("color 3: " + app.colorMachine());
		console.log("color 4: " + app.colorMachine());
		console.log("color 5: " + app.colorMachine());
		setInterval(app.pageStyles, app.timeMachine());
		console.log("new ms: " + app.timeMachine());
	}

};

$(document).ready(function() {
	app.pageStyles();
	app.init();
});
