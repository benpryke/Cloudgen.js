/*

    Cloudgen.js JavaScript library version 1.0.

    https://github.com/Ninjakannon/Cloudgen.js

    Copyright 2012 Benjamin Pryke
    Released under the MIT license
    https://github.com/Ninjakannon/Cloudgen.js/blob/master/LICENSE.txt
*/
(function(){var m=2*Math.PI,q={r:255,g:255,b:255},d=function(){};d.drawCloud=function(p,h,l,g,e,d,n){switch(arguments.length){case 0:return;case 1:h=0;case 2:l=0;case 3:g=100;case 4:e=q;case 5:d=0.15;case 6:n=25}var b=0.6*g,f=p.createRadialGradient(b,b,0,b,b,b),a="rgba("+e.r+", "+e.g+", "+e.b+", ";f.addColorStop(0,a+String(d)+")");f.addColorStop(1,a+"0)");var a=document.createElement("canvas"),c=a.getContext("2d");a.width=2*b;a.height=a.width;c.fillStyle=f;c.beginPath();c.arc(b,b,b,0,m,!0);c.fill();
for(f=0;f<n;f++){var k=Math.random()*m,c=h-b+Math.random()*g*Math.cos(k),k=l-b+Math.random()*g*Math.sin(k);p.drawImage(a,c,k)}};d.drawCloudGroup=function(d,h,l,g,e,m,n,b){switch(arguments.length){case 0:return;case 1:return;case 2:l=0;case 3:g=0;case 4:e=100}for(var f=Array.prototype.splice.call(arguments,4),a=0;a<h.length;a++)for(var c=0;c<h[a].length;c++)if(1===h[a][c]){var k=[d,l+0.75*c*e,g+0.75*a*e].concat(f);this.drawCloud.apply(this,k)}};window.$cloudgen=d})();
