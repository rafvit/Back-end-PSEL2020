const Pessoa = require('../models/usuarios')

module.exports = {
    async voltaUsuario(req, res) {
        try {

            const pessoaList = await Pessoa.find()
            res.json(pessoaList)
        } catch (err) {
            res.json({ error: 'Não foi possível realizar a listagem!' })
        }
    },
    async listarUsuario(req, res) {
        try {
            const { id } = req.params
            const pessoaList = await Pessoa.findById(id)

            res.json(pessoaList)

        } catch (err) {
            res.json({ error: 'Não foi possível realizar a listagem!' })
        }
    },
    async criarUsuario(req, res) {
        try {

            const pessoa = req.body
            console.log(pessoa)
            console.log(pessoa)
            await Pessoa.create(pessoa)

            res.json({ message: 'Cadastrado com sucesso!' })

        } catch (err) {
            console.log(err)
            res.json({ error: 'Não foi possível realizar o cadastro!' })

        }
    },
    async atualizarUsuario(req, res) {
        try {
            const pessoa = req.body
            const { id } = req.params
            const pessoaUp = await Pessoa.findByIdAndUpdate(id, pessoa, {
                new: true,
            })

            await pessoaUp.save()

            res.json({ message: 'Atualizado com sucesso!' })

        } catch (err) {
            res.json({ error: 'Não foi possível realizar o atualizar!' })
        }

    },
    async deletarUsuario(req, res) {
        try {
            const { id } = req.params
            await Pessoa.findByIdAndDelete(id)

            res.json({ message: 'Deletado com sucesso!' })
        } catch (err) {
            res.json({ error: 'Não foi possível realizar a exclusão!' })
        }
    }
}