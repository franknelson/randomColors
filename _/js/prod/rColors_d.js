(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//random RGB color
	function rInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
		};

	function rRGB(){
		var R = rInt(0, 255);
		var G = rInt(0, 255);
		var B = rInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	};

	function rDelay(){
		var T = rInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	};

	var winH = window.innerHeight + "px";

var app = {

	rRGB: function() {
		var R = rInt(0, 255);
		var G = rInt(0, 255);
		var B = rInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	},

	rMonoRGB: function() {
		var R = rInt(0, 255);
		if (R<=50){
			var mR=0;
		} else{
			var mR=R-50;
		}
		var G = rInt(0, 255);
		if (G<=50){
			var mG=0;
		} else{
			var mG=G-50;
		}
		var B = rInt(0, 255);
		if (B=50){
			var mB=0;
		} else{
			var mB=B-50;
		}
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var randomMColor = (mR + "," + mG + "," + mB + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		var newMColor = "rgba(" + randomMColor + ")";

		//return newColor, newMColor;
		return {newColor,newMColor};
	},

	rDelay:function(){
		var T = rInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	},

	rGradient: function(element){
		var color1=rRGB();
		var color2=rRGB();
		$(element).css({
			//'background': 'linear-gradient(to bottom,'+rRGB() + '15%,' + rRGB()+'85%'
			'background': 'linear-gradient(to bottom,'+color1 + '15%,' + color2+'85%'
		});
		$('#color1').html(color1);
		$('#color2').html(color2)

	},

	rWhiteGradient: function(element){
		var color1=rRGB();
		$(element).css({
			'background': 'linear-gradient(to bottom,'+color1 + '15%, rgba(255,255,255,1)'
		});
		$('#color1').html(color1);
		$('#color2').html('')
	},

	rBlackGradient: function(element){
		var color1=rRGB();
		$(element).css({
			'background': 'linear-gradient(to bottom,'+color1 + ', rgba(5,5,5,1)'
		});
		$('#color1').html(color1);
		$('#color2').html('')
	},

	rMonoGradient: function(element){
		var colors=app.rMonoRGB();
		console.log(colors.newColor);
		console.log(colors.newMColor);
		$(element).css({
			'background': 'linear-gradient(to bottom,'+colors.newColor + '15% ,' + colors.newMColor + '85%'
		});
		$('#color1').html(colors.newColor);
		$('#color2').html(colors.newMColor)
	},

	rSolid: function(element){
		var color1=rRGB();
		$(element).css({
			'background': color1
		});
		$('#color1').html(color1);
		$('#color2').html('')
	},

	keyAction: function(){
		$(window).keypress(function (e) {
			console.log(e);
		  if (e.which === 32) {
		    e.preventDefault()
		    console.log('spacebar = background gradient');
		    app.rGradient("body");
		  }
		  	else if(e.which === 118){
		  	e.preventDefault()
		    console.log('v = solid background');
		    app.rSolid("body");
		  }
		  	else if (e.which === 98){
		  	e.preventDefault()
		    console.log('b = gradient to white');
		    app.rWhiteGradient("body");
		  }
		  else if (e.which === 110){
		  	e.preventDefault()
		    console.log('n = gradient to black');
		    app.rBlackGradient("body");
		  }
		  else if (e.which === 109){
		  	e.preventDefault()
		    console.log('m = monochromatic gradient');
		    app.rMonoGradient("body");
		  }
		})
	},

	buttons:function(){
		$( "button#solid" ).click(function() {
		  app.rSolid("body");
		});
		$( "button#gradient" ).click(function() {
		  app.rGradient("body");
		});
		$( "button#gradient-black" ).click(function() {
		  app.rBlackGradient("body");
		});
		$( "button#gradient-white" ).click(function() {
		  app.rWhiteGradient("body");
		});
		$( "button#gradient-mono" ).click(function() {
		  app.rMonoGradient("body");
		});
	},

	pageStyles: function(){
		$("div #1 h1").html(rRGB);
			$("div #1").css({
			'background-color': rRGB()
			//'height': winH
			});

		$("div #2 h1").html(rRGB);
		$("div #2").css({
			'background-color': rRGB()
			//'height': winH
			});

		$("div #3 h1").html(rRGB);
		$("div #3").css({
			'background-color': rRGB()
			//'height': winH
			});

		$("div #4 h1").html(rRGB);
		$("div #4").css({
			'background-color': rRGB()
			//'height': winH
			});
		$("div #5 h1").html(rRGB);
		$("div #5").css({
			'background-color': rRGB()
			//'height': winH
			});
	},
	setHeight: function(){
		var height=$(window).height();
		$('body').css({
			'height': height
		});

	},

	init: function() {
		/*console.log("color 1: " + app.rRGB());
		console.log("color 2: " + app.rRGB());
		console.log("color 3: " + app.rRGB());
		console.log("color 4: " + app.rRGB());
		console.log("color 5: " + app.rRGB());*/
		/*setInterval(app.pageStyles, app.rDelay());*/
		//setInterval(app.pageStyles, rDelay());
		//setInterval(app.rGradient("body"), app.rDelay());
		setInterval(app.rGradient("body"), 1000);
		console.log("new ms: " + rDelay());
		app.setHeight();
		app.keyAction();
		app.buttons();
		console.log(app.rMonoRGB());
	}

};

$(document).ready(function() {
	app.init();
});

},{}]},{},[1])