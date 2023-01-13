const { Router } = require('express');

const router = Router();

router.get('/api', (req, res) => {
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "get API" 
    });
});

router.put('/api', (req, res) => {
    //res.send('Hello World');
    res.status(400).json({
        //ok:true,   //ya lo hace con status ->200
        msg : "put API" 
    });
});

router.post('/api', (req, res) => {
    //res.send('Hello World');
    res.status(201).json({
        //ok:true,   //ya lo hace con status ->200
        msg : "post API" 
    });
});

router.delete('/api', (req, res) => {
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "delete API" 
    });
});

router.patch('/api', (req, res) => {
    //res.send('Hello World');
    res.json({
        //ok:true,   //ya lo hace con status ->200
        msg : "patch API" 
    });
});


module.exports = router;

