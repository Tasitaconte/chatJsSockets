import { io } from "../index.js"
import { v4 as uuid } from "uuid";
import { selectMensaje, insertMensaje } from '../database/database.js'
const bcript = require('bcryptjs')
const rondasDeSal = 10;


io.on('connection', (socket) => {


    selectMensaje();

    socket.on('cliente:new-menssage', async (data) => {
        const mensaje = {
            id_mensaje: uuid(),
            mensaje: await bcript.hash(data, rondasDeSal)
        }
        insertMensaje(mensaje);
        console.log(mensaje);
        io.emit('server:menssages', data)
    })


});
