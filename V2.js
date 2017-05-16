var rest = require('rest-js');
var express = require('express');
var EventEmitter = require('events').EventEmitter;
var bodyParser     =  require("body-parser");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var temp =" "
var temperature = " "
var hh = " "
var humidity = " "
var restApi = rest('http://192.168.43.183/', {
crossDomain: true
});

 setInterval(function(){
restApi.read('users/der-On/repos', function(error, data) {

 temperature = data.variables.temperature ;
 hh = data.variables.humidity ;
 humidity = hh ;
temp = temperature;
temperature = "";
console.log("data");
io.emit('temperature',temp);
io.emit('humidite',humidity);
console.log(temp);
console.log(hh) ;

;});},3000);



app.use(express.static('public'));

app.get('/', function (req, res) {

    console.log(temp);
    res.render('index.ejs',{temperature: temp, humidity:humidity})

});

server.listen(3000)
