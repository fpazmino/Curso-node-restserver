const { response } = require('express');


const usuariosGet =  (req, res = response) => {
    
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "get API - controlador" 
    });
}


module.exports = {

    usuariosGet
}