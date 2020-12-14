const mongoose = require ('mongoose')

const InicializaMongoServer = async() => {
    try {
        await mongoose.connect('mongodb+srv://Rafael:@eusouogoku@cluster0.sbasv.mongodb.net/PSEL_MIND?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Conectado com sucesso!')
    } catch (error) {
        console.log('Não foi possível conectar!')
    }
}

module.exports = InicializaMongoServer
