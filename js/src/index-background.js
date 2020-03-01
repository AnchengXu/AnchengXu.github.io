// build time:Mon Mar 02 2020 06:05:35 GMT+0800 (GMT+08:00)
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var can=document.getElementById("canvas");var cxt=can.getContext("2d");can.width=1920;can.height=950;cxt.lineWidth=.3;var mousePosition={x:30*can.width/100,y:30*can.height/100};var dots={n:500,distance:50,d_radius:100,array:[]};function colorValue(t){return Math.floor(Math.random()*255+t)}function createColorStyle(t,o,i){t=3;o=3;i=3;return"rgba("+t+","+o+","+i+", 1)"}function mixConnect(t,o,i,n){return(t*o+i*n)/(o+n)}function lineColor(t,o){var i=t.color,n=o.color;var a=mixConnect(i.r,t.radius,n.r,o.radius);var r=mixConnect(i.g,t.radius,n.g,o.radius);var e=mixConnect(i.b,t.radius,n.b,o.radius);return createColorStyle(Math.floor(a),Math.floor(r),Math.floor(e))}function Color(t){t=t||0;this.r=colorValue(t);this.g=colorValue(t);this.b=colorValue(t);this.style=createColorStyle(this.r,this.g,this.b)}function Dot(){this.x=Math.random()*can.width;this.y=Math.random()*can.height;this.vx=-.5+Math.random();this.vy=-.5+Math.random();this.radius=Math.random()*5;this.color=new Color}Dot.prototype.draw=function(){cxt.beginPath();cxt.fillStyle=this.color.style;cxt.arc(this.x,this.y,this.radius,0,Math.PI*2,false);cxt.fill()};function createCircle(){for(var t=0;t<dots.n;t++){dots.array.push(new Dot)}}function drawDots(){for(var t=0;t<dots.n;t++){var o=dots.array[t];o.draw()}}function moveDots(){for(var t=0;t<dots.n;t++){var o=dots.array[t];if(o.y<0||o.y>can.height){o.vx=o.vx;o.vy=-o.vy}else if(o.x<0||o.x>can.width){o.vx=-o.vx;o.vy=o.vy}o.x+=o.vx;o.y+=o.vy}}function connectDots(){for(var t=0;t<dots.n;t++){for(var o=0;o<dots.n;o++){iDot=dots.array[t];jDot=dots.array[o];if(iDot.x-jDot.x<dots.distance&&iDot.y-jDot.y<dots.distance&&iDot.x-jDot.x>-dots.distance&&iDot.y-jDot.y>-dots.distance){if(iDot.x-mousePosition.x<dots.d_radius&&iDot.y-mousePosition.y<dots.d_radius&&iDot.x-mousePosition.x>-dots.d_radius&&iDot.y-mousePosition.y>-dots.d_radius){cxt.beginPath();cxt.strokeStyle=lineColor(iDot,jDot);cxt.moveTo(iDot.x,iDot.y);cxt.lineTo(jDot.x,jDot.y);cxt.closePath();cxt.stroke()}}}}}createCircle();function animateDots(){cxt.clearRect(0,0,can.width,can.height);moveDots();connectDots();drawDots();requestAnimFrame(animateDots)}animateDots();can.onmousemove=function(t){var t=t||window.event;mousePosition.x=t.pageX;mousePosition.y=t.pageY};can.onmouseout=function(){mousePosition.x=can.width/2;mousePosition.y=can.height/2};
//rebuild by neat 