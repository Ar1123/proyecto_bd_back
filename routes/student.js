const express = require('express');
const { datosEstudiante, asignaturasEstudiante, actividadesEstudiante, asignaturasEstudiante1, actividadAsignada, CargarActividad, gradoEstudiante, cargarEntrega, obtenerActividad, eliminarArchivo } = require('../controllers/student_controller');
const routese = express.Router();

//Al obtener el id_estudiante , obtenemos el id_grupo, no se si ira asi
routese.get('/estudiante/:id', datosEstudiante);
// routese.get('/actividadesEstudiante/:id/:id_grupo', actividadesEstudiante);
routese.get('/asignaturas1/:id_grupo', asignaturasEstudiante1);
routese.get('/asignaturas/:id_grupo', asignaturasEstudiante);
routese.get('/actividadEstudiante/:id_grupo/:id_asignaturas', actividadesEstudiante);
routese.get('/detalleActividad/:id_actividad', actividadAsignada);
routese.get('/gradoEstudiante/:id', gradoEstudiante);
routese.get('/obtenerActividad/:id', obtenerActividad);

// //Tambien tengo duda en esta
routese.post('/cargarActividad', CargarActividad);
// routese.post('/cargarEntrega', cargarEntrega);
routese.delete('/eliminarArchivo/:id_estudiante/:id_actividad/:nombre', eliminarArchivo);
module.exports = routese;