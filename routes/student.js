const express = require('express');
const { datosEstudiante,asignaturasEstudiante,actividadesEstudiante } = require('../controllers/student_controller');
const routese = express.Router();

//Al obtener el id_estudiante , obtenemos el id_grupo, no se si ira asi
routese.get('/estudiante/:id', datosEstudiante);
// routese.get('/actividadesEstudiante/:id/:id_grupo', actividadesEstudiante);
routese.get('/asignaturas/:id_grupo', asignaturasEstudiante);
routese.get('/actividadEstudiante/:id_grupo', actividadesEstudiante);
// //Tambien tengo duda en esta
// routese.post('/actividadEstudiante/:id/id_actividad', )

module.exports = routese;