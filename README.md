Control a [ShowOff](https://github.com/schacon/showoff) presentation (for all connected users) via a Node app running Socket.IO. 

##Install dependencies & start the server.
    npm install express socket.io
	node showoff-socket-control.js

##Connect ShowOff to this Node app
Insert this into the markdown of the first slide.
```html
<script src="http://node-app-uri:port/socket.io/socket.io.js"></script>
<script>
	var socket = new io.connect('http://node-app-uri:port');
	socket.on('prev', function(data){
		prevStep();
	});
	socket.on('next', function(data){
		nextStep();
	});
</script>
```

##And that's it!
Start ShowOff & hit these URLs to get the presentation moving.
```html
http://node-app-uri:port/next
http://node-app-uri:port/prev
```