import app from './app.js';

// se habilita como puerto del servidor local 3001.

let port = process.env.PORT || 3001;
let server = app.listen(port, () => console.log('Node Servidor Puerto 3001'));

server.on('error', (e) => {
    console.log(e);
})