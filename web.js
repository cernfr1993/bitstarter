var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var buffer = new Buffer("Hello Word from index.html",25);

buffer = fs.readFileSync("index.html","utf-8");
console.log(buffer.toString());
response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
