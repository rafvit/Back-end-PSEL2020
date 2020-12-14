const jwt = require('jsonwebtoken')
const segredo = require('../config/secret.json')

module.exports = (req, res, next) => {

    const middleHeader = req.headers.authorization

    if (!middleHeader) {
        return res.status(401).send({ error: 'Token não foi informado!' })
    }

    const parts = middleHeader.split(' ')

    if (!parts.length === 2) {
        return res.send.status(401).send({ error: 'Token errado!' })
    }

    const [scheme, token] = parts
    console.log(parts)

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token com formato errado!' })
    }
    jwt.verify(token, segredo.secret, (err, decoded) => {
        
        if (err) return res.status(401).send({ error: 'Token Invalido!' })
        req.usuarioId = decoded.id
        req.usuarioNivel = decoded.nivel

        return next()
    })
}