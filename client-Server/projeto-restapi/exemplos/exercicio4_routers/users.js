let NeDB = require('nedb');

let db = new NeDB({
    
    filename:'users.db',
    autoload: true

});

module.exports = (app) =>{                                  

    app.get('/users', (req, res) =>{

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
    
    app.post('/users', (req, res) => {

        //res.json(req.body);
        
        db.insert(req.body, (err, users) =>{

            if(err){

                console.log(`error: ${err}`);
                
                res.status(400).json({
                    
                    error: err

                });

            } else {

                res.status(200).json(users);
            }

        });
         
 
    
    });
};


// module.export vai exporta a arrow function para fora, junto com a rota que é passada dentro dela.
// A app dentro da funcao nesse arquivo users, trata duas rotas
// A rota  /users e a rota /admin. É exportado para fora e invocado no arquivo principal, por meio do consign.