let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) =>{

    res.statusCode = 200;
    res.setHeader('Content-type','text/html');      // Nesse arquivo users, é tratado a rota users que devolve
    res.json({                                     // como resposta um json com os dados do usuáro    
        users:[{                                  // também é tratado a rota admin que devolve como resposta
            name: 'Hcode',                       // um json.
            email: 'contato@cide.com.br',
            id: 1
        }]
    });

});

routes.get('/admin', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.json({

        users:[]
    });

});

module.exports = routes;
