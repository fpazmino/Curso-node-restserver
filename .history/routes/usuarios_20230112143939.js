const { Router } = require('express');
const { usuariosGet } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/', usuarioPut);

router.post('/', usuariosPost);

router.delete('/', (req, res) => {
    
});

router.patch('/', (req, res) => {
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "patch API" 
    });
});


module.exports = router;

