//importaciones de express y archivo del controlador de productos
import Express from 'express';
import productController from '../controllers/product.js';

//crea la instancia para la ruta
const router = new Express.Router();

//meidiante el metodo get para la ruta especificada, se va a ejecutar la función definida en el controlador de productos 
router.get(`/`,productController.getAllProduct);
router.get(`/name`,productController.getProductByName);

export default router; 