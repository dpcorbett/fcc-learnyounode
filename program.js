// Store filesystem library.
var fs = require('fs');
// Read contents of file.
var contents = fs.readFileSync(process.argv[2]);
console.log(contents.toString().split('\n').length - 1); // DEBUG
