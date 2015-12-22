const csv = require('csv-streamify')
const fs = require('fs')

const parser = csv({ objectMode: true })

misses = [];

// emits each line as a buffer or as a string representing an array of fields
parser.on('data', function (line) {
	var miss = {
		country: line[0],
		name: line[7],
		imgL: line[6],
		imgS: line[4],
	}
	misses.push(miss)
})

parser.on('end', function() {
	misses.shift();
	fs.writeFile("dist/misses.json", JSON.stringify(misses), function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 
})

// now pipe some data into it
fs.createReadStream('misses.csv').pipe(parser)