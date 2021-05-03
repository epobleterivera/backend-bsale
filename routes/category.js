//importaciones de express y archivo del controlador para las categorías
import Express from 'express';
import categoryController from '../controllers/category.js';

//se crea la instancia para la ruta
const router = new Express.Router();

//meidiante el metodo get para la ruta especificada, se va a ejecutar la función definida en el controlador 
router.get('/', categoryController.getAllCategory);
router.get('/name',categoryController.getProductCategory);
export default router; 