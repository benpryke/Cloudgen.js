/*
    This file is part of a demo for the Cloudgen.js JavaScript library.
    
    https://github.com/Ninjakannon/Cloudgen.js
    
    Copyright 2012 Benjamin Pryke
    Copyright 2013 SignpostMarv
    Released under the MIT license
    https://github.com/Ninjakannon/Cloudgen.js/blob/master/LICENSE.txt
*/

// Get the canvas and set up some parameters.
var canvas = document.getElementById("sky");
var context = canvas.getContext("2d");
var cloudCount = 100;
var cloudDepth = 8;
var canvasWidth = (document.body.clientWidth / 4);
var canvasHeight = (document.body.clientHeight / 4);
var reqAnim = requestAnimationFrame ? requestAnimationFrame : function(func){ setTimeout(func, 1000 / 30); };

// Set the canvas size.
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var background = document.createElement('canvas');
background.width = canvasWidth;
background.height = canvasHeight;
var backgroundContext = background.getContext('2d');

var cloudField = document.createElement('canvas');
cloudField.width = cloudField.height = 4096;
cloudField.style.backgroundColor = '#000';
cloudField.style.width = '1024px';
var cloudFieldContext = cloudField.getContext('2d');

for(var i=0;i<cloudCount;++i){
    var cloudGrid = [[0, 1, 0, 0],
                     [1, 1, 1, 0],
                     [1, 1, 0, 1],
                     [0, 0, 0, 1]];
	var radius = cloudField.width / 64;
	$cloudgen.drawCloudGroup(cloudFieldContext, cloudGrid, (Math.random() * (cloudField.width - (radius * 6))) + (radius * 2), (Math.random() * (cloudField.height - (radius * 6))) + (radius * 2), radius);
}

var pattern = context.createPattern(cloudField, 'repeat');

// Background.
// We create a radial gradient from the bottom-left.
backgroundContext.fillStyle = '#151530';
backgroundContext.fillRect(0, 0, canvasWidth, canvasHeight);
var gradient = backgroundContext.createRadialGradient(0, canvasHeight, 0, 0, canvasHeight, 1000);
gradient.addColorStop(0, "#344599");
gradient.addColorStop(1, "#151530");

backgroundContext.fillStyle = gradient;
backgroundContext.beginPath();
backgroundContext.arc(0, canvasHeight, 1000, 0, Math.PI * 2, true);
backgroundContext.fill();

var xOffset = 3;
var yOffset = -1;
var x = 0;
var y = 0;
function render(){
	context.drawImage(background, 0, 0);
	context.save();
	context.scale(canvas.width / (document.body.clientWidth / 4), canvas.height / (document.body.clientHeight / 4));
	for(var i=1;i<=cloudDepth;++i){
		var
			scale = 1 / i,
			offset = (scale % 3) * 3
		;
		context.save();
		context.scale(scale, scale);
		context.translate(x * offset, y * offset);
		context.fillStyle = pattern;
		context.fillRect(-(x * offset), -(y * offset), canvas.width * i, canvas.height * i);
		context.restore();
	}
	context.restore();
	x += xOffset;
	y += yOffset;
	reqAnim(render);
}
render();
