var fs = require('fs');
var file = process.argv[2];

var rs = fs.createReadStream(file);
rs.pipe(process.stdout);