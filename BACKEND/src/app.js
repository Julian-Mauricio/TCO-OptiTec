const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const app = express();

//Rutas de cabecera
const Login = require('./modules/Login/rutas');

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configuracion
app.set('port', config.app.port);

//Ruta
app.use('/api/Login', Login);

module.exports = app;