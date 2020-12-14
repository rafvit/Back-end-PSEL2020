const express = require('express')
const PessoaController = require ('./controllers/Controller')
const routes = express.Router()

routes.get('/usuarios', PessoaController.voltaUsuario)
routes.get('/usuario/:id', PessoaController.listarUsuario)
routes.put('/usuario/:id', PessoaController.atualizarUsuario)
routes.post('/usuario', PessoaController.criarUsuario)
routes.delete('/usuario/:id', PessoaController.deletarUsuario)

module.exports = routes