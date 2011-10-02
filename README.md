Control a [ShowOff](https://github.com/schacon/showoff) presentation (for all connected users) via a Node app running Socket.IO. 

##Install dependencies & start the server.
``` bash
$ npm install express socket.io
$ node showoff-socket-control.js
```

##Connect ShowOff to this Node app
* Grab the client-side Socket.IO script

``` bash
cd /path/to/showoff/presentation
wget http://node-app-uri:port/socket.io/socket.io.js
```

* ShowOff has to create a Socket. Add this to the markdown of your first slide.

``` html
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

```
http://node-app-uri:port/next
http://node-app-uri:port/prev
```
