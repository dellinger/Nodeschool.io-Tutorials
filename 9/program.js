var http = require('http');
var bl = require('bl');
var responses = [];
var count = 0;

for(var i = 0; i < process.argv.length - 2; i++) {
	execute(i);
	
}

function execute(index) {
	http.get(process.argv[i + 2], function(response) {
			response.pipe(bl(function(err, data){
				responses[index] = data.toString();
				count++;
				if(count == 3) {
					for(var k = 0; k < responses.length; k++) {
						console.log(responses[k]);
					}
				}
			}));
		});
}
