const db = require('./mysql');

const Tabla = 'Registro_Login';

function Todos() {
    return db.Todos(Tabla);
}

function Uno() {
    
}

function Eliminar() {
    
}

function Agregar() {
    
}

function Actualizar() {
    
}

module.exports = {
    Todos,
    Uno,
    Eliminar,
    Agregar,
    Actualizar
}