const express = require('express');
let app = express();

app.get('/', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1> Praticando node.Js </h1>');
});

app.get('/users', (req, res) =>{

    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.json({

        users:({
            name:'Ismael da Silva Campos',
            email:'contato@cide.com.br',
            senha: 203040506070,
            id: 1
        })

    });
});

