// Import required library.
var http = require('http');
// Retrieve data from URL supplied.
http.get(process.argv[2], (res) => {
  'use strict';
  const  statusCode  = res.statusCode;
  let error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\n` +
                      `Status Code: ${statusCode}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(chunk); // DEBUG
  });
  res.on('end', () => {
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});