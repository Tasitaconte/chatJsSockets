var socket = io();

socket.on('server:menssages', (data) => {
    createData(data);
})

const sendMensaje = (data) => {
    socket.emit('cliente:new-menssage', data);
}