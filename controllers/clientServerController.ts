/**
 * @author Jose Daniel Bermudez Salamanca
 */

//Importaciones necesarias de las librerias
import { Request, Response } from "express";

//Importaciones de métodos necesarias
import { encodeMessageWithAesCbc, decodeMessageEithAesCbc } from "../services/clientServer.service";

//Creación de constantes necesarias
const NAME_NO_SEND = 'name no send'

//Método para la obtención del estatus del servidor
const getStatus = (req: Request, res: Response) => {
    res.send({status: 'ok'})
    .status(200);
}

//Método para la obtención del saludo
const getGreeting = (req: Request, res: Response) => {   
    const name = req.body.name ? req.body.name : NAME_NO_SEND;
    const message = (name == NAME_NO_SEND) ? "Hola, ¿Cómo estás?, ¿Cuál es tu nombre?" : `Hola ${name} un gusto saludarte, ¿Cómo estás?`;

    res.send(message)
    .status(200)
}

//Método para la encriptación del mensaje
const encryptMessage = (req: Request, res: Response) => {
    encodeMessageWithAesCbc(req, res)
}

//Método para la desencriptación del mensaje
const decryptMessage = (req: Request, res: Response) => {
    decodeMessageEithAesCbc(req, res)
}

//Exportación de los métodos que se utilizarán en otras partes del código
export {
    getStatus,
    getGreeting,
    encryptMessage,
    decryptMessage
}