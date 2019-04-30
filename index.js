
// carregar módulo http
const http = require('http');



// aqui cria um servidor e estou guardando dentro da variável 'server'
let server = http.createServer((req, res) => {

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);


    switch (req.url) {

        case '/':

            res.setHeader('Content-Type', 'text/html')
            res.end('<h1>PUTA</h1>');

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

});



server.listen(3000, '127.0.0.1', () => {

    console.log('rodando');

})