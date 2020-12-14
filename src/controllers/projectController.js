const express = require('express')
const middle = require('../middlewares/middleware')
const router = express.Router()

router.use(middle)

router.get('/', (req, res) => {
    res.send({ ok: true })
})

module.exports = app => app.use('/project', router)