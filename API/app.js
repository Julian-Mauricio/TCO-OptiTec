const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

const app = express();

app.use(cors());

//Rutas de Login
const Login = require('./modules/Login/rutas');
//Rutas de Materia
const Materia = require('./modules/Materia/rutas');
//Rutas de Produccion
const Produccion = require('./modules/Produccion/rutas');
//Rutas de Produccion
const Finanzas = require('./modules/Finanzas/rutas');
//Rutas de Produccion
const Cotizacion = require('./modules/Cotizacion/rutas');





//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Configuracion
app.set('port', config.app.port);

//Ruta Login
app.use('/api/Login', Login);
//Ruta Materia
app.use('/api/Materia', Materia);
//Ruta Produccion
app.use('/api/Produccion', Produccion);
//Ruta Finanzas
app.use('/api/Finanzas', Finanzas);
//Ruta Cotizacion
app.use('/api/Cotizacion', Cotizacion);

module.exports = app;