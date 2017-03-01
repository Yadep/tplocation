var express = require('express');
var logger = require('morgan');
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static('public'))
app.use(logger());

io.sockets.on('connection', function(socket){
	socket.emit('news',{hello:'world'});
	socket.on('my other event', function(data){
		console.log(data)
	});
});

app.get('/ajoutLogement', function(req,res){
	res.sendFile(__dirname + "/ajoutLogement.html", {message : "Vive Express"})
})

app.get('/creerCompte', function(req,res){
	res.sendFile(__dirname + "/creerCompte.html", {message : "Vive Express"})
})

server.listen(8000);