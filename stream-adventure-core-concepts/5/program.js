var through = require('through');
var split = require('split');

var counter = 1;
var tr = through(write,end);
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

function write(buf) {

	if(counter % 2 === 0){
	   this.queue(buf.toString().toUpperCase());
	} else {
	   this.queue(buf.toString().toLowerCase());
	}
	this.queue('\n');
	counter++;
}

function end(){
   this.queue(null);
}
