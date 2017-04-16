// Store filesystem libraries.
const fs = require('fs');
// Store matching files.
var contents = undefined;
// Read contents of file.
function readDir(callback) {
    fs.readdir(process.argv[2], function doneReading(err, dirContents) {
        // Display error.
        if (err) console.log("error " + err); // DEBUG
        // Create filter with extension supplied.
        var extFilter = '^.*\.(' + process.argv[3] + ')$';
        // Filter out files with matching extension.
        contents = dirContents.filter((val) =>  val.match(extFilter), 0);
        // Now make necessary call after directory has been read.
        callback();
    });
}
// Output files when done.
function logContents() {
  for (var i = 0; i < contents.length; i++) {
    console.log(contents[i].toString()); // DEBUG
  }
}
// Trigger read of file.
readDir(logContents);
