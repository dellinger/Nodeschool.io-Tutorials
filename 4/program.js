var fs = require('fs')
var file = process.argv[2];

fs.readFile(file,'utf-8',function(err,data){
	if(err){
		console.log("Error: " + err);
	}else{
		console.log(data.split('\n').length - 1);
	}
});
