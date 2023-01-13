const { response } = require('express');


const usuariosGet =  (req, res = response) => {
    
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "get API - controlador" 
    });
}

const usuariosPost =  (req, res = response) => {


}

const usuariosPut =  (req, res = response) => {
    
}

const usuariosPatch =  (req, res = response) => {


}

const usuariosDelete =  (req, res = response) => {

}


module.exports = {

    usuariosGet
}