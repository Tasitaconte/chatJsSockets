require('dotenv').config();
const crypto = require('crypto');

// función para encriptar datos
const encrypt = (text) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(process.env.ALGORITHM, process.env.SECRETKEY, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        mensaje: encrypted.toString('hex')
    }
}

// función para desencriptar datos
const decrypt = (iv, text) => {
    const decipher = crypto.createDecipheriv(process.env.ALGORITHM, process.env.SECRETKEY, Buffer.from(iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(text, 'hex')), decipher.final()]);
    return decrpyted.toString();
}

// exportación de modulos
module.exports = {
    encriptar: encrypt,
    desencriptar: decrypt
}