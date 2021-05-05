// se importa el archivo connection que es donde se realiza la conexión a la base de datos
import connection from '../models/connection.js';
import isEmpty from 'is-empty'

//Función que obtinene todos los atributos de la tabla producto
const getAllProduct = (req, res,next) => {
    let query = `SELECT * FROM product`;

    connection.query(query, (error, results, fields) => {
      if(!isEmpty(results)){
        res.status(200).json(results);
      }else {
        res.status(404).json({ 'success': false, 'error': 'No hay productos en la BD' });
      }
      if (error){
        res.status(500).json({ 'success': false, 'error': 'Error Interno' });
      }
      });
}

//Función que recibe el nombre del producto mediante parametro desde la url,
//comparandolo con los nombres de productos existente en la base de datos mediante el operador LIKE
const getProductByName = (req, res, next) => {
  connection.query(`SELECT * FROM product WHERE name LIKE '%' ? '%'`, [req.query.name],(error, results, fields) => {
      if(!isEmpty(results)){
        res.status(200).json(results);
      }else {
        res.status(404).json({ 'success': false, 'error': 'Product Not Found' });
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