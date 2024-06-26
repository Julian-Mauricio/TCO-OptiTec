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
        conexion.query(`SELECT * FROM ${tabla} where id_Corte = ?`, data.id_Corte, (error, result) => {
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

function Update(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`Update ${tabla} SET ? WHERE id_Corte = ?`,  [data,data.id_Corte],  (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
    });
};

function Delete(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`Delete from  ${tabla} WHERE id_Corte = ?`, data.id_Corte,  (error, result) => {
            if (error)
                return reject(error);
            resolve(result);
        })
    });
};

function Join(tabla,TablaJoin) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} as f join ${TablaJoin} as l on f.id_Login = l.id_Login`, (error, result) => {
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
    Delete,
    Join
}