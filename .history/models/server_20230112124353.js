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
        this.app.use('/api/usuarios',require('../routes/user'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log("Servidor corriendo en puerto", this.port );
        });
    }
}

module.exports = Server;