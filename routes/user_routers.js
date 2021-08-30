const express = require('express');
const { check } = require('express-validator');
const routesu = express.Router();

const {comentario, datosUser} = require('../controllers/user_controller');
const { validarCampos } = require('../middlewares/validate_field');
const routes = require('./teacher');

routesu.post('/comentario',
[
    //validar campos
    check('id_actividad').not().isEmpty(),
    check('id_usuario').not().isEmpty(),
    check('fecha').isDate('YYYY-MM-DD'),
    check('contenido').not().isEmpty(),
    validarCampos
] ,comentario);

routes.get('/datosUser/:id',datosUser);

module.exports = routesu;