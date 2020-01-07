let NeDB = require('nedb');

let db = new NeDB({
    
    filename:'users.db',
    autoload: true

});

module.exports = (app) =>{                                  

    app.get('/users', (req, res) =>{

        // Listando os usuários
        // find serve para procurar no objeto os usuários e, o sort serve pra ordenar em ordem ascendente
        db.find({}).sort({name:1}).exec((err, users)=>{

            if(err){

                console.log(`error: ${err}`);
                res.status(400).json({

                    
                error: err

            });
            } else {

                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.json({
                    users
                });
            }
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