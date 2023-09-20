const db = require('./mysql'); // Importa el módulo mysql.js para interactuar con la base de datos MySQL.

const Tabla = 'cotizacion'; // Define el nombre de la tabla en la base de datos.


/**
 * Retorna todos los registros de la tabla 'Registro_Login'.
 * Una promesa que se resolverá con los registros de la tabla.
 */

function Todos() {
    return db.Todos(Tabla);
}

/**
 * Realiza una consulta condicional en la tabla 'Registro_Login'.
 * Cuerpo de la solicitud que contiene los parámetros de la consulta.
 * Una promesa que se resolverá con los resultados de la consulta.
 */

function Where(body) {
    return db.Where(Tabla, body);
}


/**
 * Elimina registros de la tabla 'Registro_Login' basados en el cuerpo de la solicitud.
 * Cuerpo de la solicitud que contiene los parámetros para la eliminación.
 * Una promesa que indica si la eliminación se realizó con éxito o no.
 */

function Delete(body) {
    return db.Delete(Tabla, body)
}

/**
 * Inserta un nuevo registro en la tabla 'Registro_Login' basado en el cuerpo de la solicitud.
 * Cuerpo de la solicitud que contiene los datos para la inserción.
 * Una promesa que se resolverá con el resultado de la inserción.
 */

function Insert(body) {
    return db.Insert(Tabla, body);
}

/**
 * Actualiza registros en la tabla 'Registro_Login' basados en el cuerpo de la solicitud.
 * Cuerpo de la solicitud que contiene los datos para la actualización.
 * Una promesa que se resolverá con el resultado de la actualización.
 */

function Update(body) {
    return db.Update(Tabla, body)
}

// Exporta las funciones para que puedan ser utilizadas en otros archivos.
module.exports = {
    Todos,
    Where,
    Delete,
    Insert,
    Update
}