## Ejercicio cliente servidor
### Construcción de servidor, para la consulta del estado del servidor, saludo, encriptación y desencriptación de mensajes.

Creado por Jose Daniel Bermudez Salamanca.

El presente servidor puede ejecutarse localmente. Primero debe tener lo siguiente:

- Tener instalado node
- Tener instalado typescript globalmente utilizando npm i -g typescript
- Tener instalado nodemon globalmente utilizando npm i -g nodemon

Luego seguir los siguientes pasos:

- Descargar el repositorio
- Crear el archivo .env y agregar las siguiente variables SERVER_PORT el puerto en el que quiere que corra el servidor y AES_KEY una llave AES 256 en base 64 puede utilizar la siguiente: jBGdm3hT24Ik4Ei7uoYYSO76enFES2syCabrQO9YMas= pero es recomendable crear una nueva por seguridad.
- Luego en una terminal ejecutar el siguiente comando: npm run start
- Por ultimo realizar un curl desde cmd de la siguiente manera: curl --location --request GET http://localhost:{port}/api/client-server/status reemplzando {port} por el puerto especificado en el .env SERVER_PORT. Una vez realizado el curl debe responder "status ok".

Ya tienes instalado y funcionando el servidor!