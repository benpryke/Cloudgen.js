// TODO: Add license.

// TODO: Remove magic numbers.

// Answer this question: http://stackoverflow.com/questions/4927909/is-there-a-good-method-for-dynamically-drawing-clouds-with-html5-canvas-and-java

// Get the canvas and set up some parameters.
var canvas = document.getElementById("sky");
var context = canvas.getContext("2d");
var starCount = 100;
var maxX = 800;
var maxY = 600;

// Set the canvas size.
canvas.width = maxX;
canvas.height = maxY;


// Background.
// We create a radial gradient from the bottom-left.
var gradient = context.createRadialGradient(0, maxY, 0, 0, maxY, 1000);
gradient.addColorStop(0, "#344599");
gradient.addColorStop(1, "#151530");

context.fillStyle = gradient;
context.beginPath();
context.arc(0, maxY, 1000, 0, Math.PI * 2, true);
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
    context.arc(maxX * Math.random(), maxY * Math.random(), radius, 0, Math.PI * 2, true);
    context.shadowBlur = 1 + Math.random() * 4 * radius;
    context.fill();
}


// Clouds.
// We create clouds using lots of circles filled with gradients. No shadows
// are used, these were slower and harder to use. The context "globalAlpha"
// property is useful for changing the transparency of the clouds.
var cloudGrid = [[0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                 [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                 [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
                 [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                 [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]];

cloudgen.drawCloudGroup(context, cloudGrid, 50, 60, 19, {r:255, g:255, b:255}, 0.2, 30);

cloudGrid = [[0, 1, 0, 0],
             [1, 1, 1, 0],
             [1, 1, 0, 1],
             [0, 0, 0, 1]];

cloudgen.drawCloudGroup(context, cloudGrid, 50, 300, 100, {r:100, g:255, b:0});

cloudGrid = [[1, 0, 1, 1],
             [0, 1, 1, 0]];

cloudgen.drawCloudGroup(context, cloudGrid, 300, 350, 100, {r:255, g:0, b:0});

cloudGrid = [[0, 0, 1, 1],
             [1, 1, 1, 1]];

cloudgen.drawCloudGroup(context, cloudGrid, 600, 350, 100, {r:180, g:200, b:255});
