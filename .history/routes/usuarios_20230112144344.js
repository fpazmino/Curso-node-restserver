const { Router } = require('express');
const { usuariosGet } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/', usuarioPut);

router.post('/', usuariosPost);

router.delete('/',usuariosDelete);

router.patch('/', usuariosPath);


module.exports = router;

