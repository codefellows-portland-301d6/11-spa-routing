// setting up basic Express static server

var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/', function(request, response) {
  console.log('New request from: ', request.url);
  response.json({message: 'RESPONSE JSON'}); // sends information, then closes connection
});

app.listen(3000, function() {
  console.log('Server up on port 3000');
});
