var express = require("express");
var app = express();
var io = require('socket.io')();

app.set("view engine", "ejs");
app.set("views","app/views");

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/chat'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

var server = app.listen(3100);

io.attach(server);

  io.on('connection', function(socket){
  console.log("user connected");
    socket.on('postMessage', function(data){
      io.emit('updateMessage', data);
    })
  })
