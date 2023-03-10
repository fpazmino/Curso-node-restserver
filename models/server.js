const express = require('express')
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middelware
        this.middlewares();

        //rutas de mi aplicacion
        this.route();
    }

    middlewares() {

        //CORS del server
        this.app.use( cors() );

        //leectura y parceo del body
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static('public') );
    }

    route() {
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log("Servidor corriendo en puerto", this.port );
        });
    }
}

module.exports = Server;