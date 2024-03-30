"use strict";
/**
 * @author Jose Daniel Bermudez Salamanca
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importaciones necesarias de las librerias
const cors_1 = __importDefault(require("cors"));
const server_1 = __importDefault(require("./configs/server"));
//Importación del router principal
const router_1 = require("./router/router");
//Cración de una neuva instancia de la clase Server
const server = new server_1.default();
//Especificar uso del cors
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//Especificar uso del router
server.app.use('/api', router_1.router);
//Iniciar el servidor
server.start(() => {
    console.log(`servidor corriendo en el puerto ${server.port}`);
});
