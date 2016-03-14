var express = require("express");
var app = express();
var http = require("http").Server(app);

app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000,function(){
  console.log("Listening in port 3000");
});
