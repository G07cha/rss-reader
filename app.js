var request = require('request');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/channels', function(req, res) {
  // Fake response
  res.json([{name: 'test', url: 'https://github.com/G07cha.atom'}, {name:'foo', url:'fsafasf'}, {name: 'bar', url: 'gafgasf'}]); 
});

app.post('/channels', function(req, res) {
  // TODO: Add inserting into db here
});

var server = app.listen(process.env.PORT || '3000', process.env.IP || 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server is listening '+ host + ':' + port);
});
