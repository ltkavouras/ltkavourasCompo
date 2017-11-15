/*var port = 1337;
var fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var obj = JSON.parse(fs.readFileSync('file', 'utf8'));
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));
app.get('/index.html', function(req, res){
  res.sendFile(__dirname + '/' + 'index.html');
});
fs.readFile('readMe', 'utf8', function (err, data) {
  fs.writeFile('WriteMe.json', data);
  if (err) throw err;
  //obj = JSON.parse(data);
});
*/
/*
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
*/
var express = require('express');
var http = require('http');
var app = express();

// if you're using Express 4.x, bodyParser is no longer built-in
var bodyParser = require('body-parser');

// here we import the file which has our loadJson and writeJson functions
var jsonUtil = require('./json-util.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/additem/:id', function (req, res, next) {
  // turn ID into a file name, and be careful not to expose security holes
  var filename = idToFileName(req.params.id);
  jsonUtil.loadJson(WriteToMe.json, function (err, json) {

    // TODO: make sure you handle errors
    // if err is not null, you can either consider it an error, or
    // you could simply say json = [] and start a new file

    // should also do validation checks like if(json instanceof Array) and
    // verify that req.body exists and is properly formatted, etc

    json.push(req.body); // push the object from the request body into the array

    // re-save the file
    jsonUtil.writeJson(filename, json, function (err) {
      if (err) next(err);
      else res.send(200);
    });
  });
});
server = http.createServer(app);
server.listen('14000');
app.listen(port);
console.log('Starting up server on port ' + port);
