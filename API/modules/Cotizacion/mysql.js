const mysql = require('mysql');
const config = require('../../config');
const { error } = require('../../red/respuestas');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conexionMysql() {
    conexion = mysql.createConnection(dbConfig);
    conexion.connect((error) => {
        if (error) {
            console.log('[db Error]', error);
            setTimeout(conexionMysql, 200);
        } else {
            console.log('db Conectada');
        }
    });
    conexion.on('error', error => {
        console.log('[db Error]', error);
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            conexionMysql();
        } else {
            throw error;
        }
    })
}

conexionMysql();

function Todos(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
    });
};

function Where(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} where id_Cotizacion = ?`, data.id_Cotizacion, (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
    });
};

function Insert(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`, data, (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
    });
};
22

function Update(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`Update ${tabla} SET ? WHERE id_Cotizacion = ?`, [data,data.id_Cotizacion],  (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
    });
};

function Delete(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`Delete from  ${tabla} WHERE id_Cotizacion = ?`, data.id_Cotizacion,  (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
    });
};
module.exports = {
    Todos,
    Where,
    Insert,
    Update,
    Delete
}