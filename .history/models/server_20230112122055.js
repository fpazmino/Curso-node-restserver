const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;


        //middelware
        this.middlewares();

        //rutas de mi aplicacion
        this.route();
    }

    middlewares() {

        //CORS del server
        this.app.use( cors() );

        //directorio publico
        this.app.use( express.static('public') );
    }

    route() {
        this.app.get('/api', (req, res) => {
            //res.send('Hello World');
            res.json({
                //ok:true,   //ya lo hace con status ->200
                msg : "get API" 
            });
        });

        this.app.put('/api', (req, res) => {
            //res.send('Hello World');
            res.status(400).json({
                //ok:true,   //ya lo hace con status ->200
                msg : "put API" 
            });
        });

        this.app.post('/api', (req, res) => {
            //res.send('Hello World');
            res.status(201).json({
                //ok:true,   //ya lo hace con status ->200
                msg : "post API" 
            });
        });

        this.app.delete('/api', (req, res) => {
            //res.send('Hello World');
            res.json({
                //ok:true,   //ya lo hace con status ->200
                msg : "delete API" 
            });
        });

        this.app.path('/api', (req, res) => {
            //res.send('Hello World');
            res.json({
                //ok:true,   //ya lo hace con status ->200
                msg : "path API" 
            });
        });
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log("Servidor corriendo en puerto", this.port );
        });
    }
}

module.exports = Server;