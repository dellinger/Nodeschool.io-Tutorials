var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req,res){
	var rsObj = fs.createReadStream(file);
	rsObj.pipe(res);
});
server.listen(port);



/* Write an HTTP server that serves the same text file for each request it receives

Your server should listen on the port provided by the first argument to your pro
gram.

You will be provided with the location of the file to serve as the second comman
d-line argument. You must use the fs.createReadStream() method to stream the fil
e contents to the response. */