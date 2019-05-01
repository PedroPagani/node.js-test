



module.exports = (app) => {


    // Aqui estão as rotas (estudar o .get do express)
    app.get('/', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Ta rodando o express</h1>');

});


};









/* 
// tem que chamar o express denovo em cada arquivo das rotas
let express = require('express');
//Aqui é uma coisa a mais que o express dá Router()
let routes = express.Router(); */