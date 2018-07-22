var socket = io();
var image = new Image();
image.src = '/static/ferrari.png';

var circuito = new Image();
circuito.src = '/static/circuito.png';

var canvas = document.getElementById('canvas');
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;

var context = canvas.getContext('2d');
socket.on('state', function(players) {
   // para redibujado
   context.clearRect(0, 0, window.outerWidth, window.innerHeight);
  context.drawImage(circuito, 0, 0, window.innerWidth, window.innerHeight);
  for (var id in players) {
    var player = players[id];
    context.save();
    context.translate(player.x, player.y);
    context.translate(image.width/2,image.height/2);
    context.rotate(player.angle);
    context.drawImage(image, -image.width/2, -image.height/2, 36, 103);
    context.restore();
  }
});

window.addEventListener('resize',function(e){
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
});
