const http = require('http');  
const url = require('url');

var args = process.argv.slice(2);

var server = http.createServer(function (req, res) { 
  var route = url.parse(req.url, true);
  var tempDate = new Date(route.query.iso);
  console.log(route.pathname);
  if (route.pathname === "/api/parsetime") {
    tempDate = {hour: tempDate.getHours(), minute: tempDate.getMinutes(), second: tempDate.getSeconds()
    };
  }
  if (route.pathname === "/api/unixtime") {
    tempDate = {unixtime: tempDate.getTime()};
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(tempDate));
});  


server.listen(args[0]);  