var socket = io();
var image = new Image();
image.src = '/static/ferrari.png';

//var image = document.getElementById('coche');
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
    context.save();
    context.translate(player.x, player.y);
    //context.fillStyle = player.color;
    //context.fillRect(40 / -2, 40 / -2,40, 40);
    context.translate(image.width/2,image.height/2);
    context.rotate(player.angle);
    context.drawImage(image, -image.width/2, -image.height/2, 36, 103);
    context.restore();
    //buelvo a color blanco por si hay errores
    context.fillStyle = 'white';
  }
});

window.addEventListener('resize',function(e){
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
});
