





module.exports = (app) => {


    app.get('/users', (req, res) => {
    
        
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                id: 0,
                name: 'OLOCO EXPRESS',
                age: '31'
            },
            {
                id: 1,
                name: 'jow',
                age: '20',
            }
        ]   
        
        })
    
    });
    
    
    app.get('/users/admin', (req, res) => {
    
    
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>admins!!!</h1>')
    
    
    })


    
};




/* 
let express = require('express');
let routes = express.Router();
 */