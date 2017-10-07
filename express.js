var express = require('express');
var $ = require('jquery-ajax');
var https = require('https');
var app = express();

app.listen(3000, function () {
    setInterval(function(){
        https.get('https://doctorz.com.br/app/', function(res) {
        console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);

        }).on('error', function(e) {
                console.log(e)
            /*$(function() {
                $.ajax({ 
                    type: 'POST',
                    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                    data: {
                        'key': "xxxxxxxx",
                        'message': {
                        'from_email': "xxxxxx@xxxxxx.com",
                        'to': [
                        {
                        'email': "xxxxxxxx@xxxxxxxxxx.com",
                        'name': 'xxxxxx',
                        'type': 'to'
                        }
                        ],
                        'autotext': 'true',
                        'subject': 'TEST! TEST!',
                        'html': 'Name: ' + name + '\nEmail: ' + email // and use it!
                        }
                    }
                }).done(function(response) {
                    console.log(response);
                    alert("You send an email!"); // if you're into that sorta thing
                });
            });*/
        });
    },1000)
});
/*
$(function() {
    console.log(e)
    /*$.ajax({ 
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': "xxxxxxxx",
            'message': {
            'from_email': "xxxxxx@xxxxxx.com",
            'to': [
            {
            'email': "xxxxxxxx@xxxxxxxxxx.com",
            'name': 'xxxxxx',
            'type': 'to'
            }
            ],
            'autotext': 'true',
            'subject': 'TEST! TEST!',
            'html': 'Name: ' + name + '\nEmail: ' + email // and use it!
            }
        }
    }).done(function(response) {
        console.log(response);
        alert("You send an email!"); // if you're into that sorta thing
    });*/
