const crypto = require('crypto');

const algorithm = 'aes-256-ctr'
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'

const encrypt = (text) => {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv)
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
    return {
        iv: iv.toString('hex'),
        mensaje: encrypted.toString('hex')
    }
}

const decrypt = (iv, text) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'))
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(text, 'hex')), decipher.final()])
    return decrpyted.toString()
}


module.exports = {
    encriptar: encrypt,
    desencriptar: decrypt
}