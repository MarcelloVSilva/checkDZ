var express = require('express');
var https = require('https');
var app = express();

app.listen(3000, function () {
    setInterval(function(){
        https.get('https://doctorz.com.br/app/', function(res) {
        console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);

        }).on('error', function(e) {
            console.error(e);
        });
    },1000)
});