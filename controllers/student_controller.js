const { response } = require("express");
const { querys } = require("../helpers/query_helpers");

datosEstudiante = (req, res = response) => {
    const id = req.params.id;
    console.log(id);

    const sql = 'SELECT * FROM estudiante WHERE id_estudiante = ?';
    querys(sql, [id], res);


}

asignaturasEstudiante = (req, res = response) => {
    const id_grupo = req.params.id_grupo;
    console.log(req.params);
    // No se si vendran por parametros, ya  que al ingresar los estudiantes tambien viene el id_grupo
    const sql = 'SELECT * FROM grupo NATURAL JOIN grados NATURAL JOIN asignadas NATURAL JOIN asignaturas WHERE id_grupo = ?';

    querys(sql, [id_grupo], res);
}

actividadesEstudiante = (req, res = response) => {
    const id_grupo = req.params.id_grupo;
    console.log(req.params);

    const sql = 'SELECT * FROM asigna NATURAL JOIN ensenia NATURAL JOIN asignaturas WHERE id_grupo = ?';

    querys(sql, [id_grupo], res);
}

actividadEstudiante = (req, res = response) => {
    const id_actividad = req.params.id_actividad;
    console.log(id_actividad);

    const sql = 'SELECT * FROM actividad WHERE id_actividad = ?';

    querys(sql, [id_actividad], res);
}

CargarActividad = (req, res = response) => {
    const id_actividad = req.params.id_actividad;
    const id = req.params.id;
    const { id_archivo, peso, formato, nombre, ruta, fecha } = req.body;

    const sql = 'INSERT INTO archivo( id_archivo, id_actividad, peso,formato,nombres,ruta) VALUES  (?,?;?,?,?,?,?)';
    querys(sql, [id_archivo, id_actividad, peso, formato, nombre, ruta], res);

    const sql = 'INSERT INTO entrega( id_actividad,id_estudiante,fecha,nota) VALUES  (?,?,?,0)';
    querys(sql, [id_actividad, id, fecha], res);
}


module.exports = {
    asignaturasEstudiante,
}