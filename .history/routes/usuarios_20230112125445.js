const { Router } = require('express');

const router = Router();

router.get('/', usuariosGet );

router.put('/', (req, res) => {
    //res.send('Hello World');
    res.status(400).json({
        //ok:true,   //ya lo hace con status ->200
        msg : "put API" 
    });
});

router.post('/', (req, res) => {
    //res.send('Hello World');
    res.status(201).json({
        //ok:true,   //ya lo hace con status ->200
        msg : "post API" 
    });
});

router.delete('/', (req, res) => {
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "delete API" 
    });
});

router.patch('/', (req, res) => {
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "patch API" 
    });
});


module.exports = router;

