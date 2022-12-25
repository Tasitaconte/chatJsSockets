const express = require('express');
const app = express();
const path = require('path');

const puerto = 3000;
// setting
app.set('port', process.env.PORT || puerto);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// server start
const server = app.listen(app.get('port'));

// web socket
const socketIO = require('socket.io');
module.exports.io = socketIO(server);
require("./sockets/socket.js")
console.log(`http://localhost:${puerto}`);