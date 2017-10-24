var net = require('net');  
var port = process.argv[2];
var currentTime = new Date();
var response = '';

var server = net.createServer(function (socket) {  
  response = currentTime.getFullYear();
  response += "-" + padNumber(currentTime.getMonth()+1);
  response += "-" + padNumber(currentTime.getDate());
  response += " " + padNumber(currentTime.getHours());
  response += ":" + padNumber(currentTime.getMinutes());
  console.log(response);
  socket.end(response + "\n");
});  

var padNumber = (data) => {
  return data < 10 ? "0" + data : data;
}

server.listen(port);  