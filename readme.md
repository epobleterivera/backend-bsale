
### Descripción
Esta es una aplicación backend con arquitectura API programada usando Node.JS y Express


### Proceso de inicio
* Instale Node.js: debe tener [Node.js] (https://nodejs.org/en/download/) instalado en su sistema local.
* Instalar NPM
   * Descargue el [Administrador de paquetes] (https://www.npmjs.com/get-npm)
   * Haga doble clic en el paquete y siga los pasos para instalarlo. 

### Instalación del proyecto
* Abrir un terminal en la carpeta ```cd``` raiz del proyecto.
* Ejecutar ```(npm install)```, esto instalará las librerías declaradas en el archivo ```(package.js)``` y creará la carpeta ```(node_modules```).
* Ejecutar ```(npm start)``` en el escritorio princpical del proyecto.
* Se levantará un servidor local en el puerto http://localhost:3001.
* Ahora podras realizar las distintas peticiones al backend y así tener acceso a los datos desde la direción de la Base de Datos configurada

### Estructura del codigo
* El archivo ```index.js``` es nuestro archivo principal y es de donde se ejecutará nuestra aplicación.
* Este archivo llamará al archivo ```index.js```` quien levantará el el servicio de [Express](https://expressjs.com/) y las rutas para las peticiones HTTP
* En la carpeta ```routes```, encontraremos las rutas y las respectivas funciones que se ejecutarán del controlador
* En la carpeta ```controller```, se definene las funciones que realizarán las diferentes peticiones de datos a la BD
* En la carpeta ```models```, contiene la configuración de la conexión a la base de datos, la cual es importada en los controladores para realizar una simplificación del código  al momento de realizar la consulta a la BD.

### Manejo de respuesta Servidor
* ```200``` : Cuando la petición se ejecuto correctamente.
* ```error``` : Desplegará un mensaje de error con su respectivo codigo.
