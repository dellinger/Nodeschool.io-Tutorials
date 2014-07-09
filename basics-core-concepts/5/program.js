var fs = require('fs');
var path = require('path');

var directoryName = process.argv[2];
var fileExtensionToFilter = '.' + process.argv[3];

fs.readdir(directoryName,function(err,files){
	if(err){
		console.log("Error: " + err);
	}else{
		files.forEach(function(file){
			if(path.extname(file) === fileExtensionToFilter){
				console.log(file);
			}
		});
	}
});