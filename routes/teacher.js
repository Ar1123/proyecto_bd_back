const express = require('express');
const { asignaturas, listaEstudiantes, createActividad, } = require('../controllers/teacher_controller');
const routes = express.Router();

routes.get('/docente/:id', asignaturas);
routes.get('/lista/:id', listaEstudiantes);
routes.post('/crear', createActividad);

module.exports = routes;


