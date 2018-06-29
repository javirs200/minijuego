var socket = io();

var movement = {
  up: false,
  down: false,
  left: false,
  right: false
}

var panel1 = document.getElementById("1");
var panel2 = document.getElementById("2");
var panel3 = document.getElementById("3");
var panel4 = document.getElementById("4");

panel1.addEventListener("touchstart",function (event) {
  movement.up = true;
});

panel1.addEventListener("touchend",function (event) {
  movement.up = false;
});

panel2.addEventListener("touchstart",function (event) {
  movement.down = true;
});

panel2.addEventListener("touchend",function (event) {
  movement.down = false;
});

panel3.addEventListener("touchstart",function (event) {
  movement.left = true;
});

panel3.addEventListener("touchend",function (event) {
  movement.left = false;
});

panel4.addEventListener("touchstart",function (event) {
  movement.right = true;
});

panel4.addEventListener("touchend",function (event) {
  movement.right = false;
});

socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);