# Cloudgen.js
A fluffy cloud generator for the HTML5 Canvas.

![Screenshot](http://dl.dropbox.com/u/13193692/cloudgen-stars-demo.png)

This screenshot is taken from the provided stars demo.

## Usage
Include *cloudgen-min.js* on your webpage and you can access it via the global *$cloudgen* variable. There are 2 functions you can use to draw clouds. These are *$cloudgen.drawCloud* and *$cloudgen.drawCloudGroup*. Individual clouds drawn with the "drawCloud" method are generated within a circular area defined by their parameters. Thus, "drawCloudGroup" enables the creation of individual clouds with interesting or predefined shapes (see the screenshot above) as well as letting you draw many clouds at once. Because clouds are generated using random values you you must draw them to a new canvas to animate them.

Note that some parameters are optional. Excluding these will use the default value instead. Play around with the parameters, not all results will give you your desired look and you can get some interesting results (for example, try alpha = 1).

### drawCloud
    $cloudgen.drawCloud(context, centreX, centreY, radius, colour, alpha, circles);
    
    Draws a single cloud to the given canvas context.
    
    context (required)
        The 2D "CanvasRenderingContext2D" instance to draw to.
        
    centreX (optional) Default 0.
        The approximate centre of the cloud in the x-dimension.
        
    centreY (optional) Default 0.
        The approximate centre of the cloud in the y-dimension.
        
    radius (optional) Default 100.
        The radius of the circular area inside which the cloud will be
        generated.
        
    colour (optional) Default {r:255, g:255, b:255}.
        An object of the form {r:0, g:0, b:0} representing the RGB values
        of the cloud colour.
        
    alpha (optional) Default 0.15.
        The transparency of the cloud. Range 0.0 to 1.0.
        
    circles (optional) Default 25.
        Clouds are created by drawing numerous gradient-filled circles;
        the more there are, the thicker the cloud. This is the number to
        draw.

### drawCloudGroup
    $cloudgen.drawCloudGroup(context, grid, topLeftX, topLeftY, radius, colour, alpha, circles);
    
    Draws a grid of clouds to the given canvas context.
    
    context (required)
        The 2D "CanvasRenderingContext2D" instance to draw to.
    
    grid (required)
        A two-dimensional binary array specifying the location of clouds
        with ones. Note that rows can be different lengths. For example, a
        grid specifying a single diagonal cloud is below.
            [[1],
             [0, 1],
             [0, 0, 1]]
    
    topLeftX (optional) Default 0.
        The approximate centre of the top-left cloud centre in the grid in
        the x-dimension.
    
    topLeftY (optional) Default 0.
        The approximate centre of the top-left cloud centre in the grid in
        the y-dimension.
    
    radius: see "drawCloud".
    colour: see "drawCloud".
    alpha: see "drawCloud".
    circles: see "drawCloud".

### Example
The following code is used to draw the red cloud in the example below. Observe that the last 2 parameters of "drawCloudGroup" are not provided, as the default values are used instead.

    var cloudGrid = [[1, 0, 1, 1],
                     [0, 1, 1, 0]];
    
    $cloudgen.drawCloudGroup(context, cloudGrid, 300, 350, 100, {r:255, g:0, b:0});

## Contributing
You may wish to contribute to the library or understand it further. The file *cloudgen.js* contains the entire library and is well commented. Observe that the code is wrapped in an anonymous function to hide variables from the global scope. The anonymous function body is split into the sections *Constants*, *Setup*, *Public Methods*, and *Finalisation*, each denoted with a comment ending in equals characters up to column 79. No comments extend further than column 79, and where possible lines do not either as this is more readable and generally looks prettier. As JavaScript does not support constants, the constants are merely variables named in the form CONSTANT_VARIABLE. Internally, the function *Cloudgen* represents the Cloudgen.js object, which is exposed to the global scope as *$cloudgen* in the *Finalisation* section. Comments above methods detail what they do, any return values (if applicable), and each parameter. The format should be clear and very readable.

Pull requests will only be accepted if they follow the style already used. The minified file was generated with http://closure-compiler.appspot.com, with a few manual alterations. An automatic way of doing this is required.

All contributions will remain copyright under my own name (Benjamin Pryke) and will be available under the terms of the MIT license.
