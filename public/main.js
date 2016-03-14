$(document).ready(function(){
  var socket = io();
  $("form").submit(function(){
    socket.emit("chat message", $("#m").val());
    $("#m").val('');
    return false;
  });
  socket.on("chat message", function(msg){
    $("#messages").append($("<li>").text(msg));
  });
  socket.on("connect message", function(msg){
    $("#messages").append($("<li>").text("a user has joined the chatroom"));
  });
  socket.on("disconnect message", function(msg){
    $("#messages").append($("<li>").text("a user has left the chatroom"));
  });
});
