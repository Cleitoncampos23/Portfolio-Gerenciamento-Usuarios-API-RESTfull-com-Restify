let NeDB = require('nedb');

let db = new NeDB({
    
    filename:'users.db', // cria o arquivo em disco
    // O filename cria um arquivo em disco chamado users.db
    autoload: true // cria o id
    // cria um arquivo em disco caso o mesmo não exista

});

module.exports = (app) =>{                                  

    let route = app.route('/users');
    
    route.get((req, res) =>{

        // Listando os usuários
        // find serve para procurar no objeto os usuários e, o sort serve pra ordenar em ordem ascendente

        db.find({}).sort({name:1}).exec((err, users)=>{
       
            // find traz os dados de todos os usuários dentro do objeto
        // sort organiza os usuários em ordem alfabética
            if(err){

              app.utils.error.send(err, req, res);

            }

             else {

                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.json({
                    users
                });
            }
        });

    });
    
    route.post((req, res) => {

        //res.json(req.body);
        // db insert salva esse registro em banco. Nesse parametro users vai conter o _id do usuário
        db.insert(req.body, (err, users) =>{

            if(err){

                 app.utils.error.send(err, req, res);

            } else {

                res.status(200).json(users);
            }

        });
         
 
    
    });

    let routeId = app.route('/users/:id');

    routeId.get((req, res)=>{

        db.findOne({_id:req.params.id}).exec((err, users)=>{

            // findone retorna o Id do usuário especificado
            if(err){

                app.utils.error.send(err, req, res);

            } else {

                res.status(200).json(users);
            }

        });

    });

    // methodo PUT para alteração  e atualização de dados no NeDB,
    routeId.put((req, res)=>{

        db.update({_id: req.params.id}, req.body, err =>{

            if(err){
                
                app.utils.error.send(err,req,res);

            } else {

                res.status(200).json(Object.assign(req.params, req.body));
            }

        });
    })
};




// module.export vai exporta a arrow function para fora, junto com a rota que é passada dentro dela.
// A app dentro da funcao nesse arquivo users, trata duas rotas
// A rota  /users e a rota /admin. É exportado para fora e invocado no arquivo principal, por meio do consign.