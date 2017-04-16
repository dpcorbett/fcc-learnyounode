// Include custom module.
const mymodule = require('./mymodule.js')
// Call anonymous function.
mymodule(process.argv[2], process.argv[3], logContents);
// Output files when done.
function logContents(err, dirContents) {
    if (err) console.log("error " + err); // DEBUG
    for (var i = 0; i < dirContents.length; i++) {
        console.log(dirContents[i].toString()); // DEBUG
    }
}