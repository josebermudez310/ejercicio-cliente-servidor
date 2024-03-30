/**
 * @author Jose Daniel Bermudez Salamanca
 */

//Importaciones necesarias de las librerias
import dotenv from 'dotenv';

//Cargar las variables del .env
dotenv.config()

//Creación de las variables de entorno que se utilizaran en otras partes del código
export const SERVER_PORT = Number(process.env.PORT)
export const AES_KEY = process.env.AES_KEY