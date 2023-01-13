const { response } = require('express');


const usuariosGet =  (req, res = response) => {
    
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "get API - controlador" 
    });
}

const usuariosPost =  (req, res = response) => {
    //res.send('Hello World');
    res.status(201).json({
        //ok:true,   //ya lo hace con status ->200
        msg : "post API" 
    });

}

const usuariosPut =  (req, res = response) => {
    //res.send('Hello World');
    res.status(400).json({
        //ok:true,   //ya lo hace con status ->200
        msg : "put API" 
    });
}

const usuariosPatch =  (req, res = response) => {


}

const usuariosDelete =  (req, res = response) => {
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "delete API" 
    });
}


module.exports = {

    usuariosGet
}