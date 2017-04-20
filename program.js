// Import required libraries.
var bl = require('bl');
var http = require('http');
var addr = process.argv[2];
// Retrieve data from URL supplied.
http.get(addr, (res) => {
  'use strict';
  const  statusCode  = res.statusCode;
  let error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\n` +
                      `Status Code: ${statusCode}`);
  }
  // Use Buffer List to read data.
  res.pipe(bl(function (error, data) {
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }
    console.log(data.length); // DEBUG
    console.log(data.toString()); // DEBUG
  }));
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});