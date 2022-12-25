import mysql from 'mysql';
import {readMensaje,createMensaje} from './db_querys.js';
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const insertMensaje = (data) =>{
    createMensaje(connection,data);
}

const selectMensaje = (io) =>{
    readMensaje(connection,io);
}

module.exports = {
    insertMensaje,
    selectMensaje
}