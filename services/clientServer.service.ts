/**
 * @author Jose Daniel Bermudez Salamanca
 */

//Importaciones necesarias de las librerias
import { Request, Response } from "express"
import * as crypto from "crypto"

//Importación de las variables de entorno necesarias
import { AES_KEY } from '../global/environment';

//Creación de constantes necesarias
const MESSAGE_NO_SEND = "message no send";
const ENCRYPTED_MESSAGE_NO_SEND = "enctypted message no send";
const IV_NO_SEND = "iv no send";


//Metodo para validar y enviar a encriptar el mensaje con AES CBC
const encodeMessageWithAesCbc = (req: Request, res: Response) => {
    const message: string = req.body.message ? req.body.message : MESSAGE_NO_SEND

    if (message == MESSAGE_NO_SEND) {
        res.send('Por favor, envía el mensaje a encriptar')
        .status(400)
    }

    const encryptedMessage = aesCbcEncode(message)

    res.send(encryptedMessage)
    .status(200)
}

//Método para validar y enviar a desencriptar el mensaje con AES CBC
const decodeMessageEithAesCbc = (req: Request, res: Response) => {
    const encrypted_message: string = req.body.encrypted_message ? req.body.encrypted_message : ENCRYPTED_MESSAGE_NO_SEND
    const iv: string = req.body.iv ? req.body.iv : IV_NO_SEND

    if (encrypted_message == ENCRYPTED_MESSAGE_NO_SEND) {
        res.send('Por favor, envía el mensaje encriptado')
        .status(400)
    }

    if (iv == IV_NO_SEND) {
        res.send('Por favor, envía el iv (initial vector)')
        .status(400)
    }

    try {
        const decryptedMessage = aesCbcDecode({encrypted_message, iv})

        res.send(decryptedMessage)
        .status(200)
    } catch(e) {
        res.send('Error al desencriptar, por favor valida los datos enviados')
        .status(400)
    }
}

//Método para encriptar con AES CBC
const aesCbcEncode = (message: string): Object => {
    const iv = crypto.randomBytes( 16 );
    const key = base64Decode(AES_KEY);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv );

    const encrypted = Buffer.concat( [
        cipher.update(
            message, 'utf-8'
            ),
            cipher.final(),
        ] );

    return {
        encrypted_message: base64Encode(encrypted),
        iv: iv.toString('base64')
    };
}

//Método para desencriptar con AES CBC
const aesCbcDecode = (data: {encrypted_message: String, iv: String}): String => {
    const iv = base64Decode(data.iv);
    const enctyptedMessage = base64Decode(data.encrypted_message);
    const key = base64Decode(AES_KEY);

    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    const decrypted = decipher.update( enctyptedMessage );
    return Buffer.concat( [ decrypted, decipher.final() ] ).toString();
}

//Método para encriptar base64
const base64Encode = (value: Buffer): String => Buffer.from(value).toString('base64');

//Metodo para desencriptar de base64
const base64Decode = (value: String = ""): Buffer => Buffer.from(value, 'base64');

export {
    encodeMessageWithAesCbc,
    decodeMessageEithAesCbc
}