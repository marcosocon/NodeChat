var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

var userNumber = 1;

app.use(express.static(__dirname + "/public"));

io.on('connection', function(socket){
  socket.userName = `User ${userNumber}`;
  userNumber++;
  io.emit("connect message", `${socket.userName} has joined the chatroom`);

  socket.on('disconnect', function(){
    io.emit("disconnect message", `${socket.userName} left the chatroom` );
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', `${socket.userName} : ${msg}`);
  });

});

http.listen(3000, function(){
  console.log('listening on port :3000');
});
