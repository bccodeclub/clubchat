var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

http.listen(80, function(){
    console.log('listening on *:80');
  });  