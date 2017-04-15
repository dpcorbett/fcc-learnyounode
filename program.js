console.log(process.argv); // DEBUG
// Remove first two arguments.
var operands = process.argv.slice(2);
// Sum the remaining numbers.
var result = operands.reduce((acc, val)=>parseInt(acc) + parseInt(val), 0);
console.log(result); // DEBUG
