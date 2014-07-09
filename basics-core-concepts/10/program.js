var net = require('net');
var port = process.argv[2];
var strftime= require('strftime');


var server = net.createServer(function(socket){
   //socket handling logic
   
   var data = strftime("%F %R");
   socket.end(data);
 });
 server.listen(port);


 // Listen to TCP connection
 // For each connection provide 24 hour time 
 // "YYYY-MM-DD hh:mm"

 // use socket.wrwite(data) to write data to the socket and socket.end() to close the socket. 