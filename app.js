// Dependencies.
var express = require('express');
var path = require('path');
var app = express();

app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/client/index.html'));
});

module.exports = app;