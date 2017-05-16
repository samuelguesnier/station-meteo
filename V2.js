var rest = require('rest-js');

var express = require('express');

var bodyParser     =  require("body-parser");

var app = express();

var temp =" "

var temperature = " " 

var hh = " "

var humidity = " " 

var restApi = rest('http://192.168.1.88/', {

  crossDomain: true

});





restApi.read('users/der-On/repos', function(error, data) {





 temperature = data.variables.temperature ;

 hh = data.variables.humidity ;

 humidity = hh ; 

 temp = temperature;

temperature = "";

console.log(temp);

console.log(hh) ;

;});

app.use(express.static('public'));



app.get('/', function (req, res) {



console.log(temp);

  

  res.render('index.ejs',{temperature: temp, humidity:humidity})

	

})

app.listen(3000)
