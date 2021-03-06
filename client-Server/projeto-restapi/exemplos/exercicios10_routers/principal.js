const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include('Router').include('utils').into(app);

app.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando!');

});

 // em seguida esses arquivos são invocados pelo app.use
 // logo mais abaixo, na porta 3000 o servidor é acionado quando
// a porta é chamada.    
// Nesse arquivo principal, as variáveis routerIndex e routerUsers
// O body-parser é um modulo que permite conver os dados via post em formato json
// urlencode permite que decodifique a url e os dados sejam exibidos via json.
