var socket = io();

var movement = {
  up: false,
  down: false,
  left: false,
  right: false
}
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = true;
      break;
    case 87: // W
      movement.up = true;
      break;
    case 68: // D
      movement.right = true;
      break;
    case 83: // S
      movement.down = true;
      break;
  }
});
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
  }
});


socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);
var canvas = document.getElementById('canvas');
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
//console.log(canvas);
var context = canvas.getContext('2d');
socket.on('state', function(players) {
  //fondo blanco
  context.clearRect(0, 0, window.outerWidth, window.innerHeight);
  context.fillStyle = 'white';
  //bolas de todos los jugadores
  for (var id in players) {
    var player = players[id];
    context.fillStyle = player.color;
    context.beginPath();
    context.arc(player.x, player.y, 20, 0, 2 * Math.PI);
    context.fill();
    //buelvo a color blanco por si hay errores
    context.fillStyle = 'white';
  }
});

window.addEventListener('resize',function(e){
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
});
