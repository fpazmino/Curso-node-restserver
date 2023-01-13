const { response } = require('express');


const usuariosGet =  (req, res = response) => {
    
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "get API - controlador" 
    });
}

const usuariosPost =  (req, res = response) => {
    
    //const {body} = req.body;
    const {nombre, edad} = req.body;

    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "post API - controlador" ,
        body
    });

}

const usuariosPut =  (req, res = response) => {
    
     
    
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "put API - controlador"
    });
}

const usuariosPatch =  (req, res = response) => {
    
        //res.send('Hello World');
        res.json({
            //ok:true,   //ya lo hace con status ->200
            msg : "patch API - controlador" 
        });

}

const usuariosDelete =  (req, res = response) => {
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "delete API - controlador" 
    });
}


module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}