// se importa el archivo connection que es donde se realiza la conexión a la base de datos
import connections from '../models/connection.js';

//Función que obtinene todos los atributos de la tabla category
const getAllCategory =(req, res, next) => {
    let query = `SELECT * FROM category`;

    connections.query(query, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        res.status(200).json(results);
      });
}

//Función que recibe el nombre de la categría selecionada por el usuario,llega mediante parametro en la URL
//se realiza el inner joins entre las tablas y se agrega la condición de igualdad entre el nombre de la cate
//y parametro recibido.
const getProductCategory = (req, res, next) => {
  let category = req.query.name;
  let query = `SELECT product.* FROM product, category WHERE product.category = category.id AND category.name= "${category}"`;
  connections.query(query, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.status(200).json(results);
    });
}


//se exportan las funciones
export default {
    getAllCategory,
    getProductCategory
}