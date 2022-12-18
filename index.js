const path = require('path')
const express = require('express');
const app = express();

// setting
app.set('port', process.env.PORT || 3000);

// static files
app.use(express.static(path.join(__dirname, 'public')))

// server start
const server = app.listen(app.get('port'), () => {
})

// web socket
const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Hola: ', socket.id);
    socket.on('new-menssage',function(data){
        io.sockets.emit('menssages',data)
    })
});
