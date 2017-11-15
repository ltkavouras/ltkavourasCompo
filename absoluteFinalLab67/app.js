var port = 1337;
var fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));
app.get('/index.html', function(req, res){
  res.sendFile(__dirname + '/' + 'index.html');
});
app.post('/process_post', urlencodedParser, function(req, res){
  // Prepares the output into JSON format
  response = {
    first_name : req.body.first_name,
    last_name : req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
  var read = fs.readFileSync('readMe.txt','utf-8');
  console.log(read);
});


app.listen(port);
console.log('Starting up server on port ' + port);
