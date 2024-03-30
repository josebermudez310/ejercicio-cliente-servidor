/**
 * @author Jose Daniel Bermudez Salamanca
 */

//Importaciones necesarias de las librerias
import express from 'express';

//Importación de variables de entorno necesarias
import { SERVER_PORT } from '../global/environment';

//Creación de la clase Server
export default class Server{

    //Creación de la propiedades de la clase Server
    public app: express.Application;
    public port: Number;

    //Método ejecutado cuando se crea una nueva instancia de la clase Server
    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.app.use(express.json());
    }

    //Método para iniciar el servidor
    start(callback: any){
        this.app.listen(this.port, callback);
    }
}