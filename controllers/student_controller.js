const { response } = require("express");
const { querys } = require("../helpers/query_helpers");

datosEstudiante = (req, res = response) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM estudiante WHERE id_estudiante = ?';
    querys(sql, [id], res);


}

// SELECT id_grado FROM grupo NATURAL JOIN grados WHERE grupo.id_grupo = '001g'
asignaturasEstudiante = (req, res = response) => {
    const id_grupo = req.params.id_grupo;
    // No se si vendran por parametros, ya  que al ingresar los estudiantes tambien viene el id_grupo
    // const sql = 'SELECT nombre FROM grupo NATURAL JOIN grados NATURAL JOIN asignadas NATURAL JOIN asignaturas WHERE id_grupo = ?';
    const sql = 'SELECT nombre FROM asignadas NATURAL JOIN asignaturas WHERE asignadas.id_grado IN (SELECT id_grado FROM grupo NATURAL JOIN grados WHERE grupo.id_grupo = ? GROUP BY (id_grado) )';

    querys(sql, [id_grupo], res);
}

actividadesEstudiante = (req, res = response) => {
    const id_grupo = req.params.id_grupo;

    const sql = 'SELECT * FROM asigna NATURAL JOIN ensenia NATURAL JOIN asignaturas WHERE id_grupo = ?';

    querys(sql, [id_grupo], res);
}

actividadAsignada = (req, res = response) => {
    const id_actividad = req.params.id_grupo;

    const sql = 'SELECT * FROM actividad WHERE id_actividad = ?';

    querys(sql, [id_actividad], res);
}

CargarActividad = (req, res = response) => {
    const id_actividad = req.params.id_actividad;
    const id = req.params.id;
    const { id_archivo, peso, formato, nombre, ruta, fecha } = req.body;

    const sql = 'INSERT INTO archivo( id_archivo, id_actividad, peso,formato,nombres,ruta) VALUES  (?,?;?,?,?,?,?)';
    querys(sql, [id_archivo, id_actividad, peso, formato, nombre, ruta], res);

    const sqls = 'INSERT INTO entrega( id_actividad,id_estudiante,fecha,nota) VALUES  (?,?,?,0)';
    querys(sqls, [id_actividad, id, fecha,0], res);
}


module.exports = {
    asignaturasEstudiante,
    datosEstudiante,
    actividadesEstudiante,
    CargarActividad,
    actividadAsignada
}