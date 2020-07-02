const express =require('express');
const servidor = express();

servidor.get('/', function(req,res){
    res.send('Hola Mundo!');
});

servidor.get('/usuario', function(req,res){
    res.send('Esta es la página de usuario');
});

servidor.listen(3000, function(){
    console.log('Estoy escuchado en el puerto 3000');
});