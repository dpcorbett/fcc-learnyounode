var http = require('http');  
const fs = require('fs');
var args = process.argv.slice(2);

var server = http.createServer(function (req, res) { 
  fs.createReadStream(args[1]).pipe(res);
});  


server.listen(args[0]);  