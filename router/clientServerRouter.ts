/**
 * @author Jose Daniel Bermudez Salamanca
 */

//Importaciones necesarias de las librerias
import { Router } from 'express';

//Importación de métodos necesarios
import { getStatus, getGreeting, encryptMessage, decryptMessage } from '../controllers/clientServerController';

//Creación del router para la rute /client-server
export const clientServerRouter = Router();

//Creación de rutas necesarias
clientServerRouter.get('/status', getStatus);
clientServerRouter.post('/greeting', getGreeting);
clientServerRouter.post('/encrypt-message', encryptMessage);
clientServerRouter.post('/decrypt-message', decryptMessage);