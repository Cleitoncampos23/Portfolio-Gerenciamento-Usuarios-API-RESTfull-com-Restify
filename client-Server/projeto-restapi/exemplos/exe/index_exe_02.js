// Primeiro servidor web
const http = require('http'); 

// O require serve para carregar o http !
// A variável server serve para receber o http e criar o servidor através do méthod createServer
// recebendo os seguintes parâmetros: req, res ! 
// Em seguida é exibido no console a url solicitada junto com o método !

let server = http.createServer((req, res)=>{

    console.log('URL:', req.url); // url recebida - > : /
    console.log('Method:', req.method); // Method recebido - > : GET

    switch(req.url){

        case '/':
            res.statusCode = 200;
            res.setHeader('content-type', 'text/html');
            res.end('<h1>Meu primeiro servidor web em node.js</h1>');
        break;


        case '/users':
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify({

            users:[{

                name: 'Hcode',
                email: 'contato@cide.com.br',
                id: 1
            }]
        }));
        break;

        case '/users/Cleiton':
            res.statusCode = 200;
            res.setHeader('content-type', 'text/html');
            res.end('<h1>Exemplo 3 em node.js</h1>');
        break;
        
        case '/users/Cleiton/Campos':
            res.statusCode = 200;
            res.setHeader('content-type', 'text/html');
            res.end('<h1> Exemplo 4 em node.js</h1>');
        break;

        case '/users/Cleiton/Campos/usuario':
            res.statusCode = 200;
            res.setHeader ('content-type', 'application/json');
            res.end(JSON.stringify({
                users:[{
                    
                    name: 'Cleiton',
                    sobrenome:'Mauricio',
                    idade: '28',
                    Altura: '1.75',
                    Peso: '1.80',
                    hobbies: 'Futebol, Champions legue'
                }]

            }));
        break;

        case '/users/Cleiton/Campos/usuario/ultimo':
            res.statusCode = 200;
            res.setHeader ('content-type', 'application/json');
            res.end(JSON.stringify({
                users:[{
                    
                    name: 'Fabrício',
                    sobrenome:'Mauricio',
                    idade: '28',
                    Altura: '1.75',
                    Peso: '1.80',
                    hobbies: 'Futebol, Champions legue'
                }]

            }));

        break;
    }
});

// Aqui a variável server recebe o método listen, que serve para ouvir a requisição na porta 3000!
// como mostra abaixo: primeiro a: porta - > 3000 depois -> o localhost -> 127.0.0.1.
server.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando !');

});