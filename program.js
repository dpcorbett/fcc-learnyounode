// Store filesystem library.
var fs = require('fs');
// Store new line count.
var count = undefined;
// Read contents of file.
function readText(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        if (err) console.log("error " + err); // DEBUG
        count = fileContents.toString().split('\n').length - 1;
        callback();
    })
}
// Output count when done.
function logCount() {
  console.log(count);
}
// Trigger read of file.
readText(logCount);
