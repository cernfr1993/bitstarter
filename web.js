var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var buffer = new Buffer("Hello Word from index.html",25);

fs.readFileSync("index.html","utf-8");
console.log(buf.toString());
response.send(resultOfreadFileSync);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
