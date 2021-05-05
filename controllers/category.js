// se importa el archivo connection que es donde se realiza la conexión a la base de datos
import connections from '../models/connection.js';
import isEmpty from 'is-empty'

//Función que obtinene todos los atributos de la tabla category
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

//Función que recibe el nombre de la categría selecionada por el usuario,llega mediante parametro en la URL
//se realiza el inner joins entre las tablas y se agrega la condición de igualdad entre el nombre de la cate
//y parametro recibido.
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