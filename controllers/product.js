// se importa el archivo connection que es donde se realiza la conexión a la base de datos
import connection from '../models/connection.js';
import isEmpty from 'is-empty'

 /**
 * Función que extrae todo los datos de la tabla producto
 * @url https://bsale-tienda-app.herokuapp.com/api/product
 * @type function
 * @name: getAllProduct
 * @method GET
 * @param  {}
 * @return { status 200: ok, 204: No hay productos en la BD, 500: error }
 */
const getAllProduct = (req, res,next) => {
    let query = `SELECT * FROM product`;

    connection.query(query, (error, results, fields) => {
      if(!isEmpty(results)){
        res.status(200).json(results);
      }else {
        res.status(204).json({ 'success': false, 'error': 'Product Not Found' });
      }
      if (error){
        res.status(500).json({ 'success': false, 'error': 'Error Interno' });
      }
      });
}

 /**
 * Función que recibe como parametro el nombre del producto buscado,
 * comparandolo con los nombres de productos existente en la base de datos mediante el operador LIKE 
 * @url https://bsale-tienda-app.herokuapp.com/api/product/name
 * @type function
 * @name: getProductByName
 * @method GET
 * @param { name: string }
 * @return { status 200: ok, 204:Product Not Found, 500: error }
 */
const getProductByName = (req, res, next) => {
  connection.query(`SELECT * FROM product WHERE name LIKE '%' ? '%'`, [req.query.name],(error, results, fields) => {
      if(!isEmpty(results)){
        res.status(200).json(results);
      }else {
        res.status(204).json({ 'success': false, 'error': 'Product Not Found' });
      }
      if (error){
        res.status(500).json({ 'success': false, 'error': 'Error Interno' });
      }
   
      
    });
}



//se exportan las funciones
export default {
    getAllProduct,
    getProductByName
}