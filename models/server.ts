import express, { Application } from 'express';
import authRoutes from "../routes/auth";
import messageRoutes from "../routes/message";
import defaultDatasource from '../db';


class Server {

    // Definicion de propiedades
    private app: Application;
    private port: string;
    private apiPaths = {
        auths: '/wires/auth',
        messages: '/wires/messages'
    }


    constructor() {

        this.app = express();
        this.port = process.env.PORT  || '8000';

        this.conectarDB();

        // Definicion de rutas
        this.routes();

    }

    conectarDB() {

        try {
            defaultDatasource.initialize();
            console.log('DB Online');

        } catch (error) {
            console.log(error);
        }

    }

    routes() {

        this.app.use( this.apiPaths.auths, authRoutes );
        this.app.use( this.apiPaths.messages, messageRoutes );

    }


    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`)
        } )
    }

}

export default Server;