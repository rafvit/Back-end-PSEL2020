const express = require('express')
const bodyParser = require('body-parser')

const InicializaMongoServer = require('./bancoDeDados')
const routes = require('./routes')

InicializaMongoServer()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes)

app.listen(5001, () => {
    console.log("Rodando!")
});
