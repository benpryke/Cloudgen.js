/*
    This file is part of a demo for the Cloudgen.js JavaScript library.
    
    https://github.com/Ninjakannon/Cloudgen.js
    
    Copyright 2012 Benjamin Pryke
    Released under the MIT license
    https://github.com/Ninjakannon/Cloudgen.js/blob/master/LICENSE.txt
*/

// Get the canvas and set up some parameters.
var canvas = document.getElementById("sky");
var context = canvas.getContext("2d");
var starCount = 100;
var canvasWidth = 800;
var canvasHeight = 600;
var reqAnim = requestAnimationFrame ? requestAnimationFrame : function(func){ setTimeout(func, 1000 / 30); };

// Set the canvas size.
canvas.width = canvasWidth;
canvas.height = canvasHeight;

function render(){
// Background.
// We create a radial gradient from the bottom-left.
var gradient = context.createRadialGradient(0, canvasHeight, 0, 0, canvasHeight, 1000);
gradient.addColorStop(0, "#344599");
gradient.addColorStop(1, "#151530");

context.fillStyle = gradient;
context.beginPath();
context.arc(0, canvasHeight, 1000, 0, Math.PI * 2, true);
context.fill();


// Stars.
// We randomly place a number of stars using shadows as a highlight.
context.fillStyle = "#dadffa";
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.shadowColor = "#a3ade6";

for (var i = 0; i < starCount; i++) {
    var radius = 1 + Math.random() * 2;
    
    context.beginPath();
    context.arc(canvasWidth * Math.random(), canvasHeight * Math.random(), radius, 0, Math.PI * 2, true);
    context.shadowBlur = 1 + Math.random() * 4 * radius;
    context.fill();
}


// Clouds.
// We create clouds using lots of circles filled with gradients. No shadows
// are used, these were slower and harder to use. The context "globalAlpha"
// property is useful for changing the transparency of the clouds.

// Cloudgen.js cloud formation.
var cloudGrid = [[0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                 [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                 [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
                 [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                 [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]];

$cloudgen.drawCloudGroup(context, cloudGrid, 50, 60, 19, {r:255, g:255, b:255}, 0.2, 30);

// Left-hand green cloud.
cloudGrid = [[0, 1, 0, 0],
             [1, 1, 1, 0],
             [1, 1, 0, 1],
             [0, 0, 0, 1]];

$cloudgen.drawCloudGroup(context, cloudGrid, 50, 300, 100, {r:100, g:255, b:0});

// Middle red cloud.
cloudGrid = [[1, 0, 1, 1],
             [0, 1, 1, 0]];

$cloudgen.drawCloudGroup(context, cloudGrid, 300, 350, 100, {r:255, g:0, b:0});

// Right-hand light blue cloud.
cloudGrid = [[0, 0, 1, 1],
             [1, 1, 1, 1]];

$cloudgen.drawCloudGroup(context, cloudGrid, 600, 350, 100, {r:180, g:200, b:255});

reqAnim(render);
}

render();