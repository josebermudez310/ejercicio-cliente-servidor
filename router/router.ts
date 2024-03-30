/**
 * @author Jose Daniel Bermudez Salamanca
 */

//Importaciones necesarias de las librerias
import { Router } from 'express';

//Importación de los routers necesarios
import { clientServerRouter } from './clientServerRouter';

//Creación del router principal
export const router = Router();

//Creación de las rutas necesarias
router.use('/client-server', clientServerRouter)