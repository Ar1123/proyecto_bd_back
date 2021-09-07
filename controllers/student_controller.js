const { response } = require("express");
const { querys } = require("../helpers/query_helpers");

datosEstudiante = (req, res = response) => {
    const id = req.params.id;
    // SELECT * FROM estudiante NATURAL JOIN usuario WHERE id_estudiante = '100U' and estudiante.id_estudiante = usuario.id_usuario;

    const sql = 'SELECT * FROM estudiante NATURAL JOIN usuario WHERE id_estudiante =  ? and estudiante.id_estudiante = usuario.id_usuario';
    querys(sql, [id], res);


}

gradoEstudiante = (req, res = response) => {

    const id = req.params.id;
    const sql = 'SELECT * FROM grados WHERE grados.id_grado = (SELECT grupo.id_grado FROM estudiante NATURAL JOIN grupo WHERE estudiante.id_estudiante = ?)';
    querys(sql, [id], res);

}

// SELECT id_grado FROM grupo NATURAL JOIN grados WHERE grupo.id_grupo = '001g'
asignaturasEstudiante = (req, res = response) => {
    const id_grupo = req.params.id_grupo;
    // No se si vendran por parametros, ya  que al ingresar los estudiantes tambien viene el id_grupo
    // const sql = 'SELECT nombre FROM grupo NATURAL JOIN grados NATURAL JOIN asignadas NATURAL JOIN asignaturas WHERE id_grupo = ?';
    const sql = 'SELECT nombre,id_asignaturas FROM asignadas NATURAL JOIN asignaturas WHERE asignadas.id_grado IN (SELECT id_grado FROM grupo NATURAL JOIN grados WHERE grupo.id_grupo = ? GROUP BY (id_grupo) )';

    querys(sql, [id_grupo], res);
}

asignaturasEstudiante1 = (req, res = response) => {
    // const id_grupo = req.params.id_grupo;
    const id_g = req.body;

    const sql = 'SELECT nombre FROM asignadas NATURAL JOIN asignaturas WHERE asignadas.id_grado IN (SELECT id_grado FROM grupo NATURAL JOIN grados WHERE grupo.id_grupo = ? GROUP BY (id_grado) )';



    querys(sql, [id_g], res);
}

actividadesEstudiante = (req, res = response) => {
    const id_grupo = req.params.id_grupo;
    const id_asignaturas = req.params.id_asignaturas;

    ;

    const sql = 'SELECT * FROM asigna NATURAL JOIN ensenia NATURAL JOIN asignaturas WHERE id_grupo = ? AND id_asignaturas = ?';

    querys(sql, [id_grupo, id_asignaturas], res);
}

actividadAsignatura = (req, res = response) => {
    const id_grupo = req.params.id_grupo;


    const sql = 'SELECT * FROM asigna NATURAL JOIN ensenia NATURAL JOIN asignaturas WHERE id_grupo = ? AND nombre = ?';

    querys(sql, [id_grupo], res);
}

actividadAsignada = (req, res = response) => {
    const id_actividad = req.params.id_actividad;

    const sql = 'SELECT * FROM actividad WHERE id_actividad = ?';

    querys(sql, [id_actividad], res);
}



CargarActividad =(req, res=response)=>{
    const { id_actividad, id_estudiante, peso, formato, nombre, ruta, fecha, tipo_archivo } = req.body;
    const sql = 'INSERT INTO archivo( id_actividad, peso,formato,nombre,ruta, tipo_archivo) VALUES  (?,?,?,?,?,?)';
    querys(sql, [id_actividad, peso, formato, nombre, ruta, tipo_archivo], res, false);

    const sqls = 'INSERT INTO entrega( id_actividad,id_estudiante,fecha,nota) VALUES  (?,?,?,?)';       
   querys(sqls, [id_actividad, id_estudiante, fecha, 0], res);



    

}

// CargarActividad = (req, res = response) => {
//     // const id_actividad = req.params.id_actividad;
//     // const id = req.params.id;
//     const { id_actividad, id, peso, formato, nombre, ruta, fecha, tipo_archivo } = req.body;

//     const sql = 'INSERT INTO archivo( id_actividad, peso,formato,nombre,ruta, tipo_archivo) VALUES  (?,?,?,?,?,?)';
//     querys(sql, [id_actividad, peso, formato, nombre, ruta, tipo_archivo], res);


// }

// cargarEntrega = (req, res = response) => {
//     const { id_actividad, id, fecha, nota } = req.body;

//     const sqls = 'INSERT INTO entrega( id_actividad,id_estudiante,fecha,nota) VALUES  (?,?,?,?)';
//     querys(sqls, [id_actividad, id, fecha, nota], res);
// }

module.exports = {
    asignaturasEstudiante,
    datosEstudiante,
    actividadesEstudiante,
    asignaturasEstudiante1,
    CargarActividad,
    actividadAsignada,
    gradoEstudiante,
    // cargarEntrega
}