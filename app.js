//importaciones de modulos 
import express from 'express';
import pkg from 'body-parser'
const { urlencoded, json } = pkg;

//importaciones de rutas de API
import productRute from './routes/product.js';
import categoryRute from './routes/category.js';

let app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "false");
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.use(urlencoded({ extended: true , defaultCharset: 'utf-8' }));
app.use(json());


//crea el nombre de la ruta url para los productos y categorias
app.use('/api/product', productRute);
app.use('/api/category', categoryRute);

export default app;