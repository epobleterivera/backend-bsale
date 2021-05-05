// se importa el archivo connection que es donde se realiza la conexión a la base de datos
import connections from '../models/connection.js';
import isEmpty from 'is-empty'


 /**
 * Función que obtinene todos los atributos de la tabla category
 * @url https://bsale-tienda-app.herokuapp.com/api/category
 * @type function
 * @name getAllCategory
 * @method GET
 * @param {}
 * @response { status 200: ok, 404:No hay categorias en la BD, 500: error }
 */
const getAllCategory =(req, res, next) => {
    let query = `SELECT * FROM category`;

    connections.query(query, (error, results, fields) => {
      if(!isEmpty(results)){
        res.status(200).json(results);
      }else {
        res.status(404).json({ 'success': false, 'error': 'No hay categorias en la BD' });
      }
      if (error){
        res.status(500).json({ 'success': false, 'error': 'Error Interno' });
      }
      });
}


 /**
 * Función que recibe como parametro el id de la categoria selecionada por el usuario, 
 * luego se realiza el inner joins entre las tablas
 * se agrega la condición de igualdad entre el parametro recibido id y el atributo id de la tabla category
 * @url https://bsale-tienda-app.herokuapp.com/api/category/id
 * @type function
 * @name: getProductCategory
 * @method GET
 * @param { id: int }
 * @return { status 200: ok, 404: Categoria no encontrada, 500: error }
 */
const getProductCategory = (req, res, next) => {
  connections.query(`SELECT product.* FROM product, category WHERE product.category = category.id AND category.id= ?`, [req.query.id],(error, results, fields) => {
    if(!isEmpty(results)){
      res.status(200).json(results);
    }else {
      res.status(404).json({ 'success': false, 'error': 'Categoria no encontrada' });
    }
    if (error){
      res.status(500).json({ 'success': false, 'error': 'Error Interno' });
    }
    });
}


//se exportan las funciones
export default {
    getAllCategory,
    getProductCategory
}