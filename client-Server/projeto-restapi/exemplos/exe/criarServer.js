const http = require('http');

let server = http.createServer(function(req, res){
    
            console.log('URL', req.url);
            console.log('URL', req.method);

            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end(JSON.stringify({
                
                users:[{
                    name: 'Cleiton',
                    sobrenome: 'Campos',
                    email:'cleitoncampos2015@gmail.com',
                    pasword: '12345',
                    _id: '##############'
                }],

                user:[{
                    name: 'Cristiano',
                    sobrenome: ' Mario da Costa',
                    email:' MarioCosta015@gmail.com',
                    pasword: '12345',
                    _id: '##############'
                }]
            }))

});


server.listen(3000, '127.0.0.1', function(){

    console.log('Servidor rodando');

});
/* 

O método JSON.stringify() converte valores em javascript para uma String  JSON.
Como criar um servidor web em nodeJs ?

1- crair const hhtp
2- carregar const http com require('htpp');
3- criar variável server
4- atribuir a variável server o méthodo createserver - > http.createServer
5- dentro do método createServer, passar uma funcao que receba dois paramentros, req e res.
6- no escopo da funcao, fazer um console.log de re.url e console.log de re.methodo
7- tratar o parametro res, definindo o tipo de cabeçalho como resposta para o servidor
8- tratar o parametro res, definindo o statusCode
9-
*/