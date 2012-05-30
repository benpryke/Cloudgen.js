// TODO: Add license.

// Hide our creation of cloudgen from the global scope.
(function() {
    // Constants =============================================================
    // We require this later, so precompute it here.
    var TWO_PI = Math.PI * 2;
    
    // The ratio of circle radius to cloud radius. The circles used to draw
    // the clouds are thus this times the cloud radius.
    var CIRCLE_RADIUS_RATIO = 0.6;
    
    // The spacing between 
    var CLOUD_GROUP_SPACING = 0.75;
    
    
    // Create our cloudgen object.
    var cloudgen = function() {
    };
    
    
    // context, x, y, radius, colour, alpha, density
    // Does not reset global params.
    /*cloudgen.drawCloud = function(context, centreX, centreY, radius, colour, alpha, density) {
        // Set default parameters.
        switch (arguments.length) {
            case 0: return;
            case 1: centreX = 0;
            case 2: centreY = 0;
            case 3: radius = 100;
            case 4: colour = {r:255, g:255, b:255};
            case 5: alpha = 1.0;
            case 6: density = 30;
        }
        
        // Set some values we need.
        var circleRadius = radius * CIRCLE_RADIUS_RATIO;
        var innerGradientRadius = circleRadius * INNER_GRADIENT_RATIO;
        var colourString = "rgba(" + colour.r + ", " + colour.g + ", " + colour.b + ", ";
        var colourStop1 = colourString + "0.1)";
        var colourStop2 = colourString + "0.0)";
        
        // Set up context.
        context.save();
        context.globalAlpha = alpha;
        
        // Create as many circles as indicated by "density".
        for (var i = 0; i < density; i++) {
            // Calculate the circle position within the cloud.
            var angle = Math.random() * TWO_PI;
            var x = centreX + Math.random() * radius * Math.cos(angle);
            var y = centreY + Math.random() * radius * Math.sin(angle);
            
            // Create the circle gradient.
            // TODO: should we be drawing a circle to a canvas and drawing that multiple times?
            var gradient = context.createRadialGradient(x, y, innerGradientRadius, x, y, circleRadius);
            gradient.addColorStop(0, colourStop1);
            gradient.addColorStop(1, colourStop2);
            context.fillStyle = gradient;
            
            // Draw the circle.
            context.beginPath();
            context.arc(x, y, circleRadius, 0, TWO_PI, true);
            context.fill();
        }
        
        // Restore our changes to the context.
        context.restore();
    };*/
    
    
    /*  Draws a single cloud to the given canvas context.
        
        context: (Required)
            The 2D "CanvasRenderingContext2D" instance to draw to.
            
        centreX: (Optional)
            The approximate centre of the cloud in the x-dimension. Default 0.
            
        centreY: (Optional)
            The approximate centre of the cloud in the y-dimension. Default 0.
            
        radius: (Optional)
            The radius of the circular area inside which the cloud will be
            generated. Default 100.
            
        colour: (Optional)
            An object of the form {r:0, g:0, b:0} representing the RGB values
            of the cloud colour. Default {r:255, g:255, b:255}.
            
        alpha: (Optional)
            The transparency of the cloud. Range 0.0 to 1.0. Default 0.3.
            
        circles: (Optional)
            Clouds are created by drawing numerous gradient-filled circles;
            the more there are, the thicker the cloud. This is the number to
            draw. Default 30. */
    cloudgen.drawCloud = function(context, centreX, centreY, radius, colour, alpha, circles) {
        // Set default parameters.
        switch (arguments.length) {
            case 0: return;
            case 1: centreX = 0;
            case 2: centreY = 0;
            case 3: radius = 100;
            case 4: colour = {r:255, g:255, b:255};
            case 5: alpha = 0.3;
            case 6: circles = 30;
        }
        
        // Calcualte the radius of the circles used to draw the cloud.
        var circleRadius = radius * CIRCLE_RADIUS_RATIO;
        
        // Create the circle's radial gradient.
        var gradient = context.createRadialGradient(circleRadius, circleRadius, 0, circleRadius, circleRadius, circleRadius);
        var gradientColour = "rgba(" + colour.r + ", " + colour.g + ", " + colour.b + ", ";
        
        gradient.addColorStop(0, gradientColour + String(alpha) + ")");
        gradient.addColorStop(1, gradientColour + "0)");
        
        // Draw the circle with gradient to a canvas.
        var circleCanvas = document.createElement("canvas");
        var circleCanvasContext = circleCanvas.getContext("2d");
        
        circleCanvas.width = circleRadius * 2;
        circleCanvas.height = circleCanvas.width;
        
        circleCanvasContext.fillStyle = gradient;
        
        circleCanvasContext.beginPath();
        circleCanvasContext.arc(circleRadius, circleRadius, circleRadius, 0, TWO_PI, true);
        circleCanvasContext.fill();
        
        // Draw the specified number of circles.
        for (var i = 0; i < circles; i++) {
            // Compute a randomised circle position within the cloud.
            var angle = Math.random() * TWO_PI;
            var x = centreX - circleRadius + Math.random() * radius * Math.cos(angle);
            var y = centreY - circleRadius + Math.random() * radius * Math.sin(angle);
            
            // Draw the circle.
            context.drawImage(circleCanvas, x, y);
        }
    };
    
    
    /*
    topLeftX: centre of top-left cloud.
    */
    cloudgen.drawCloudGroup = function(context, topLeftX, topLeftY, grid, radius, colour, alpha, circles) {
        // Loop through the cloud positions array.
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    var centreX = topLeftX + j * radius * CLOUD_GROUP_SPACING;
                    var centreY = topLeftY + i * radius * CLOUD_GROUP_SPACING;
                    
                    this.drawCloud(context, centreX, centreY, radius, colour, alpha, circles);
                }
            }
        }
    };
    
    
    // Expose cloudgen to the global scope.
    window.cloudgen = cloudgen;
})();
