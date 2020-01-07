const express = require('express');
let routerIndex = require('./Router/index');
let routerUsers = require('./Router/users');

let app = express();
                                            // Nesse arquivo principal, as variáveis routerIndex e routerUsers
app.use(routerIndex);                       // carregam os arquivos index e users da pasta router
app.use('/users', routerUsers);             // em seguida esses arquivos são invocados pelo app.use    
                                            // logo mais abaixo, na porta 3000 o servidor é acionado quando
                                            // a porta é chamada.    
app.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando !');

});
