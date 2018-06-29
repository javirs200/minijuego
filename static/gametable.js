var socket = io();

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
