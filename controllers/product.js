// se importa el archivo connection que es donde se realiza la conexión a la base de datos
import connection from '../models/connection.js';

//Función que obtinene todos los atributos de la tabla producto
const getAllProduct = (req, res,next) => {
    let query = `SELECT * FROM product`;

    connection.query(query, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        res.status(200).json(results);
      });
}

//Función que recibe el nombre del producto mediante parametro desde la url,
//comparandolo con los nombres de productos existente en la base de datos mediante el operador LIKE
const getProductByName = (req, res, next) => {
  connection.query(`SELECT * FROM product WHERE name LIKE '%' ? '%'`, [req.query.name],(error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.status(200).json(results);
    });
}



//se exportan las funciones
export default {
    getAllProduct,
    getProductByName
}