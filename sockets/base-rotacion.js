module.exports = function (io) {
    // io stuff here... io.on('conection..... 
    var players = {};
    io.on('connection', function (socket) {
        socket.on('new player', function () {
            //console.log('player connected [ ' + socket.id + ' ] ');
            players[socket.id] = {
                x: 100,
                y: 100,
                angle:0,
                //color: getRandomColor()
            };
        });
        socket.on('movement', function (data) {
            var player = players[socket.id] || {};
            if (data.left) {
                player.angle -= 5 * Math.PI / 180;
            }
            if (data.up) {
                player.x += 5 * Math.sin(player.angle);
                player.y -= 5 * Math.cos(player.angle);
            }
            if (data.right) {
                player.angle += 5 * Math.PI / 180;
            }
            if (data.down) {
                player.x += -5 * Math.sin(player.angle);
                player.y -= -5 * Math.cos(player.angle);
            }
        });

        socket.on('disconnect', function () {
            players[socket.id] = {};
            //console.log('player disconnected [ ' + socket.id + ' ] ');
        });
    });

    setInterval(function () {
        io.sockets.emit('state', players);
    }, 1000 / 60);

    /*function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }*/

}
