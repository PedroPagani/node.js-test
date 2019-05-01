

// carregando o express - já vem com o http junto
const express = require('express');
const consign = require('consign');


// aqui invoca o express
let app = express();

// Aqui ele vai incluir todos os arquivo dentro da pasta routes
consign().include('routes').into(app);


// aqui 'ouve' o localhost: 3000
// TALVEZ eu tenha que colocar o IP do host!!
app.listen(3000, '127.0.0.1', () => {
    
    console.log('rodando');
    
})


/* 
    Aqui é sem o consign
 */
// aqui importa os express.Router() da pasta do routes

/* let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users'); */


/* // use() é como se eu quisese usar outro pluguin dentro do express

app.use(routesIndex);

// tenho que definir o /users para usar como esta no arquivo users.js '/', '/admin'

app.use('/users', routesUsers); */


































/* 
    FIM

 */




// aqui cria um servidor e estou guardando dentro da variável 'server'
// aqui seria apenas o node, em express

// carregar módulo http
/* const http = require('http'); */

/* let server = http.createServer((req, res) => {
    
    console.log('URL:', req.url);
    console.log('METHOD:', req.method);


    switch (req.url) {

        case '/':

            res.setHeader('Content-Type', 'text/html')
            res.end('<h1>muda aqui!</h1>');

        break;

        case '/users':

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                users: [{
                    id: 0,
                    name: 'Pedro',
                    age: '31'
                },
                {
                    id: 1,
                    name: 'jow',
                    age: '20',
                }
                ]   

            }))


    }

}); */


