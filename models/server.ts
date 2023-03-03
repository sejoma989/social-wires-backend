import express, { Application } from 'express';
import cors from 'cors';
import authRoutes from "../routes/auth";
import messageRoutes from "../routes/message";
import db from '../db/connection';


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

        this.dbConnection();

        // Middlewares metodos iniciales
        this.middlewares();

        // Definicion de rutas
        this.routes();

    }

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('DB Online');

        } catch (error) {
            console.log(error);
            throw new Error('Error a la hora de iniciar la DB');
        }

    }

    middlewares() {

        // Cors
        this.app.use( cors() );

        // Parseo y lectura del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public') );

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