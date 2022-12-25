import {desencriptar} from "../sockets/encrypt.js";

const readMensaje = (connection,io) => {
    let sql = `select * from mensaje`
    connection.query(sql, (error, results) => {
        if (error) throw error;
        const data = []
        for (let i = 0; i < results.length; i++) {
            let datos = {
                id_mensaje: results[i].id_mensaje,
                mensaje: desencriptar(results[i].iv,results[i].mensaje)
            }
            data.push(datos)
        }
        console.log("Datos traidos exitosamente");
        io.emit('server:loadMensajes', data)
    })
}

const createMensaje = (connection, data) => {
    let sql = "INSERT INTO mensaje set ?"
    connection.query(sql, data, (error, results) => {
        if (error) throw error;
        console.log("Envio Exitoso");
    })
}

const updateMensaje = () => {

}

const deleteMensaje = () => {

}

module.exports = {
    readMensaje,
    createMensaje
}