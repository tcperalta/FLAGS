var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
context.beginPath();

context.fillStyle = 'red';
context.fillRect(0, 275, 800, 50);
context.fillRect(375, 0, 50, 600);
// x, y, width, height