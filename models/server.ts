import express, { Application } from 'express';

class Server {

    // Definicion de propiedades
    private app: Application;
    private port: string;


    constructor() {

        this.app = express();
        this.port = process.env.PORT  || '8000';

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`)
        } )
    }

}

export default Server;