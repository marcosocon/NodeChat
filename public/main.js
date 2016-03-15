"use strict"

$(document).ready(function(){

  var socket = io();
  $(".chat").submit(function(){
    socket.emit("chat message", $("#m").val());
    $("#m").val('');
    return false;
  });
  socket.on("chat message", function(msg){
    $("#messages").append($("<li>").text(msg));
  });
  socket.on("connect message", function(msg){
    $("#messages").append($("<li>").html(` <strong> ${msg} </strong> `));
  });
  socket.on("disconnect message", function(msg){
    $("#messages").append($("<li>").html(` <strong> ${msg} </strong> `));
  });
});
