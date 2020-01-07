let express = require('express');
let routes = express.Router();


routes.get('/', (req, res) => {                        // Nesse arquivo index, a rota que está sendo tratada
        res.statusCode = 200;                         // É a rota padrão, rota /
        res.setHeader('Content-type', 'text/html');  // Nessa rota é passado uma resposta ao usuário     
        res.end('<h1> Olá </h1>');                  // Um, h1 junto com um cabeçalho.     

});

module.exports = routes;



