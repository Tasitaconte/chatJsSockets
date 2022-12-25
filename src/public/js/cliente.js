var socket = io();

socket.on('server:menssages', (data) => {
    appendSms(data);
})

const sendMensaje = (data) => {
    socket.emit('cliente:new-menssage', data);
}

socket.on('server:loadMensajes', data => {
    renderSms(data)
})