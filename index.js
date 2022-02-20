const express = require('express');

// Crear el server de express
const app = express();


// Escuchar peticiones
app.listen( 4000, ()=>{
    console.log('Servidor corriendo en el puerto 4000');
} )

// Rutas
app.get('/', (req, res)=>{

    console.log('Se requiere /');
    res.json({
        ok:true
    })

})