import app from './app.js';

// se habilita el puerto 3001 y se levanta un servidor con express

let port = process.env.PORT || 3001;
let server = app.listen(port, () => console.log('Node Servidor Puerto 3001'));

server.on('error', (e) => {
    console.log(e);
})