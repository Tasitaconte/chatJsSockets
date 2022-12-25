
const readMensaje = (connection) => {
    let sql = `select * from mensaje`
    connection.query(sql, (error, results) => {
        if (error) throw error;
        const data = []
        for (let i = 0; i < results.length; i++) {
            let datos = {
                id_mensaje: results[i].id_mensaje,
                mensaje: results[i].mensaje
            }
            data.push(datos)
        }
        console.log(`impresion desde data:`,data);
    })
}

const createMensaje = (connection, data) => {
    let sql = "INSERT INTO mensaje set ?"
    connection.query(sql, data, (error, results) => {
        if (error) throw error;
        console.log("se inserto", results);
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