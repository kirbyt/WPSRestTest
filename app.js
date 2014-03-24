
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var data = [];

app.get('/get', function(req, res) {
    res.send(data);
});

app.post('/post', function(req, res) {
    data.push(req.body);
    res.send(data);
});

app.put('/put/:index', function(req, res) {
    var index = req.params.index;
    if (index < data.length) {
        data[index] = req.body;
        res.send(data);
    } else {
        res.send(404, 'Not found.');
    }
});

app.delete('/delete/:index', function(req, res) {
    var index = req.params.index;
    if (index < data.length) {
        data.splice(index,1);
        res.send(data);
    } else {
        res.send(404, 'Not found.');
    }
});

app.post('/resetdata', function(req, res) {
    data = [];
    res.send(data);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('WPSRestTest server listening on port ' + app.get('port'));
});
