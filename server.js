var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
    console.log('Server Connected VIA Socket');

    socket.on('message', function(message){
        console.log('Message Recieved: ' + message.text);
        message.timestamp = moment().valueOf();
        io.emit('message', message);
    });

    //Timestamp property 
    socket.emit('message',{
        name: 'System',
        text:' Welcome to the chat app',
        timestamp: moment.valueOf()
    });
    
});

http.listen(PORT, function(){
    console.log('Server Started.');
});
