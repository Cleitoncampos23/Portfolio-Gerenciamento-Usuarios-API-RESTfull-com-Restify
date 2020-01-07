const express = require('express');
const consign = require('consign');

let app = express();
                                            // Nesse arquivo principal, as variáveis routerIndex e routerUsers
consign().include('Router').into(app);
                                            // em seguida esses arquivos são invocados pelo app.use                                                // logo mais abaixo, na porta 3000 o servidor é acionado quando
                                           // a porta é chamada.    
app.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando !');

});
