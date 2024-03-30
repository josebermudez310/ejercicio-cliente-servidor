/**
 * @author Jose Daniel Bermudez Salamanca
 */

//Importaciones necesarias de las librerias
import cors from "cors";
import Server from "./configs/server";

//Importación del router principal
import { router } from "./router/router"

//Cración de una neuva instancia de la clase Server
const server = new Server();

//Especificar uso del cors
server.app.use(cors({origin: true, credentials: true}));

//Especificar uso del router
server.app.use('/api', router);

//Iniciar el servidor
server.start(()=>{
    console.log(`servidor corriendo en el puerto ${server.port}`);    
});