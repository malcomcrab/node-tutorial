var http = require('http');
const url = require('url');

/* 
http://localhost:8080/?year=2017&month=July
Should display 2017 July in browser
*/

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const q = url.parse(req.url, true).query //write a response to the client
  var txt = q.year + " " + q.month;
  res.end(txt); //end the response
}).listen(8080); //the server object listens on port 8080