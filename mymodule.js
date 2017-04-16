// Store filesystem libraries.
const fs = require('fs');
// Read contents of file.
module.exports = function (dirName, fileExt, callback) {
    fs.readdir(dirName, function doneReading(err, dirContents) {
        // Display and return error.
        if (err) {
            console.log("error " + err); // DEBUG
            callback(err, dirContents);
        } else {
            // Create filter with extension supplied.
            var extFilter = '^.*\.(' + fileExt + ')$';
            // Filter out files with matching extension.
            var contents = dirContents.filter((val) =>  val.match(extFilter), 0);
            // Now make necessary call after directory has been read.
            callback(null, contents);
        }
    });
}