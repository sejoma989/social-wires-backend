import express, { Application } from 'express';
import userRoutes from "../routes/auth";

class Server {

    // Definicion de propiedades
    private app: Application;
    private port: string;
    private apiPaths = {
        auths: '/wires/auth'
    }


    constructor() {

        this.app = express();
        this.port = process.env.PORT  || '8000';

        // Definicion de rutas
        this.routes();

    }

    routes() {

        this.app.use( this.apiPaths.auths, userRoutes );
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`)
        } )
    }

}

export default Server;