var http = require('http');  
var map = require('through2-map')
var args = process.argv.slice(2);

var server = http.createServer(function (req, res) { 
  req.pipe(map((chunk) => {return chunk.toString().toUpperCase()})).pipe(res);
});  


server.listen(args[0]);  