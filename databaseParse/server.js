var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node'
});

connection.connect();
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/data', function(req, res){
    var username=req.body.name;
		var userLastName = req.body.lastName;
    connection.query("INSERT INTO `names` (name, lastName) VALUES (?)", username.toString(), userLastName.toString(), function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
    res.send(username + userLastName);
});

app.listen(3000, function () {
console.log('Example app listening on port 3000');
});
