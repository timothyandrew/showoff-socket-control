var app = require('express').createServer()
	, io = require('socket.io').listen(app);

app.get('/next', function(req, res){
	io.sockets.emit('next');
	res.send();
});

app.get('/prev', function(req, res){
	io.sockets.emit('prev');
	res.send();
});


io.sockets.on('connection', function(socket){
	console.log("a new socket has joined!");
});

app.listen(10000);
