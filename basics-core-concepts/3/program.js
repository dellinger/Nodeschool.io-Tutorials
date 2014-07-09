var fs = require('fs')
var file = process.argv[2];

var buffer = fs.readFileSync(file);
var bufferString = buffer.toString();
var array = bufferString.split('\n');

console.log(array.length - 1);