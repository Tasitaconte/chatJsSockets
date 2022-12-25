import { io } from "../index.js"
import { v4 as uuid } from "uuid";
import { selectMensaje, insertMensaje } from '../database/database.js'
import { encriptar } from "./encrypt.js";

io.on('connection', (socket) => {
    // carga los mensajes anteriormente mandados
    selectMensaje(socket);

    // Recibe los datos del cliente y los procesa
    socket.on('cliente:new-menssage', (data) => {
        const dataEncriptada = [encriptar(data)];
        const smsEncriptado = {
            id_mensaje: uuid(),
            iv: dataEncriptada[0].iv,
            mensaje: dataEncriptada[0].mensaje,
        }
        insertMensaje(smsEncriptado);
        selectMensaje(io);
    })
});