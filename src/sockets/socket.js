import { io } from "../index.js"
import { v4 as uuid } from "uuid";
import { selectMensaje, insertMensaje } from '../database/database.js'
import { encriptar} from "./encrypt.js";

io.on('connection', (socket) => {

    selectMensaje(socket);

    socket.on('cliente:new-menssage', (data) => {

        const dataEncriptada = [encriptar(data)];
        const mensaje = {
            id_mensaje: uuid(),
            mensaje: data
        }
        const smsEncriptado = {
            id_mensaje: uuid(),
            iv: dataEncriptada[0].iv,
            mensaje: dataEncriptada[0].mensaje
        }
        insertMensaje(smsEncriptado);
        io.emit('server:menssages', mensaje)
    })
});
