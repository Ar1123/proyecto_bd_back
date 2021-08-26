const express = require('express');
const { asignaturas } = require('../controllers/teacher_controller');
const routes = express.Router();

routes.get('/docente/:id', asignaturas);

module.exports = routes;


