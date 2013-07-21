var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var fs = require('fs');
  var text = new Buffer(fs.readFileSync('index.html'),'utf-8');
  response.send('Hello!')
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
