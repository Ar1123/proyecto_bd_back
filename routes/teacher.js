//paquetes de terceros
const express = require('express');
const { check } = require('express-validator');
const routes = express.Router();

//Exportaciones locales

const { 
    asignaturas, 
    listaEstudiantes, 
    createActividad, 
    agregarArchivos,
    grupos,
    grados,     
    getGrupo} = require('../controllers/teacher_controller');


const { validarCampos } = require('../middlewares/validate_field');


//rutas 

/*
.......##.......##..######...########.########
......##.......##..##....##..##..........##...
.....##.......##...##........##..........##...
....##.......##....##...####.######......##...
...##.......##.....##....##..##..........##...
..##.......##......##....##..##..........##...
.##.......##........######...########....##...
*/
routes.get('/docente/:id', asignaturas);
routes.get('/lista/:id', listaEstudiantes);
routes.get('/grupos/:idocente/:idGrado', grupos);
routes.get('/grados/:id', grados);
routes.get('/grado/:id_grado', getGrado);
routes.get('/grupo/:id_grupo/:id_grado', getGrupo);
routes.get('/asignatura/:id_grupo/:id_docente', getAsignatura);
/*







.......##.......##.########...#######...######..########
......##.......##..##.....##.##.....##.##....##....##...
.....##.......##...##.....##.##.....##.##..........##...
....##.......##....########..##.....##..######.....##...
...##.......##.....##........##.....##.......##....##...
..##.......##......##........##.....##.##....##....##...
.##.......##.......##.........#######...######.....##...
*/
routes.post('/crearActividad', 
[
    //validaciones de los campos
    check('descripcion').not().isEmpty(),
    check('id_periodo').not().isEmpty(),
    check('id_grupo').not().isEmpty(),
    check('id_docente').not().isEmpty(),
    check('fecha_inicial').isDate('YYYY-MM-DD'),
    check('fecha_limite').isDate('YYYY-MM-DD'), 
    validarCampos
],
//Llamado por referencia
createActividad
);
routes.post('/aniadirArchivo', 
[
    //validaciones de los campos
    check('id_actividad').not().isEmpty(),
    check('peso').not().isEmpty(),
    check('formato').not().isEmpty(),
    check('nombre').not().isEmpty(),
    check('ruta').isURL(),
    validarCampos
],
//Llamado por referencia
agregarArchivos
);

module.exports = routes;


