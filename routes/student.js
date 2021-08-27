const express = require('express');
const { datosEstudiante, asignaturasEstudiante, actividadesEstudiante, actividadEstudiante } = require('../controllers/student_controller');
const routes = express.Router();

//Al obtener el id_estudiante , obtenemos el id_grupo, no se si ira asi
routes.get('/estudiante/:id/:id_grupo', datosEstudiante, asignaturasEstudiante);
routes.get('/actividadesEstudiante/:id/:id_grupo', actividadesEstudiante);
routes.get('/actividadEstudiante/:id/:id_actividad', actividadEstudiante);
//Tambien tengo duda en esta
routes.post('/actividadEstudiante/:id/id_actividad', )

module.exports = routes;