var http = require('http');
var url = require('url');
var moment = require('moment');

var port = Number(process.argv[2]);

var server = http.createServer(function(req,res){
	if(req.method != 'GET'){
	   return res.end('NOT GET');
	}
	var parsedUrl = url.parse(req.url,true);
	var pathname = parsedUrl.pathname; // /api/parsetime
	var queryString = parsedUrl.query;
	var iso = queryString.iso;
	
	var json = {};
	var date = moment(iso);	
	if(pathname === "/api/parsetime"){	
		json = parsetime(date);
	}

	if(pathname === "/api/unixtime"){
		json = unixtime(date);
	}

	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json));
});
server.listen(port);

function parsetime(time) {
	return {
		hour : time.hour(),
		minute : time.minute(),
		second : time.second()
	}
}

function unixtime(time){
	return {
		unixtime : time.valueOf()
	}
}




/*
Write an HTTP server that serves JSON data when it receives a GET request to the
 path '/api/parsetime'. Expect the request to contain a query string with a key
'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties.
For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query st
ring but returns UNIX epoch time under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your pro
gram.
*/