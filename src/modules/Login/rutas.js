const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', async function (req,res) {
    try {
        const items = await controlador.Todos();
        respuesta.success(req, res, items, 200);
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }
});

module.exports = router;