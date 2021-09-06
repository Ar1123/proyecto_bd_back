const { response } = require("express");
const { querys, querys_return } = require("../helpers/query_helpers");





/*
.......##.......##..######...########.########
......##.......##..##....##..##..........##...
.....##.......##...##........##..........##...
....##.......##....##...####.######......##...
...##.......##.....##....##..##..........##...
..##.......##......##....##..##..........##...
.##.......##........######...########....##...
*/

// Se listan los grupos donde el docente da clases 
grupos = (req, res = response)=>{
    // const id = req.params.id;
    //     console.log(req.params);
    // ;

    const sql = 'SELECT grado, posicion, ensenia.id_grupo  FROM (ensenia INNER JOIN grupo) NATURAL JOIN grados WHERE ensenia.id_docente = ? AND ensenia.id_grupo = grupo.id_grupo and grados.id_grado= ? GROUP BY (ensenia.id_grupo)';
  const  { idocente, idGrado} = req.params;

    // const sql =  'SELECT grado, posicion FROM (ensenia INNER JOIN grupo) NATURAL JOIN grados WHERE ensenia.id_docente = ? AND ensenia.id_grupo = grupo.id_grupo GROUP BY (ensenia.id_grupo)';
    querys(sql,[idocente, idGrado], res, true);
    

}
// Se listan los grados donde el docente da clases

grados = (req, res = response)=>{
    const id = req.params.id;

    ;

    const sql =  'SELECT grado, id_grado FROM (ensenia INNER JOIN grupo) NATURAL JOIN grados WHERE ensenia.id_docente = ? AND ensenia.id_grupo = grupo.id_grupo GROUP BY (grado)';
    querys(sql,[id], res, true);
    

}

//se listan las asignaturas que imparte el docente
asignaturas = (req, res = response)=>{
    const id =  req.params.id;

    const sql =   'SELECT asignaturas.nombre FROM asignaturas NATURAL JOIN ensenia WHERE ensenia.id_docente = ? GROUP BY(asignaturas.nombre)';

    querys(sql,[id], res, true);
}

// se lista los estudiantes de un deterninado grupo
listaEstudiantes = (req, res = response)=>{
    const {id} = req.params

    const sql = 'SELECT id_usuario, nombres, apellidos, identificacion, sexo FROM estudiante NATURAL JOIN usuario WHERE estudiante.id_grupo = ? AND estudiante.id_estudiante = usuario.id_usuario';
    
    querys(sql,[id], res, true);
}


getGrado=(req, res = response)=>{
    const{id_grado} = req.params;
    const sql = 'SELECT grado FROM grados WHERE id_grado = ?';
    querys(sql,[id_grado], res, true);

}


getGrupo = (req, res = response)=>{
    const {id_grupo, id_grado} = req.params;

const  sql = 'SELECT grado, posicion FROM grados NATURAL JOIN grupo WHERE id_grupo= ? AND id_grado = ?';     

querys(sql,[id_grupo, id_grado], res, true); 


}

getAsignatura =(req, res = response)=>{
 const {id_grupo, id_docente} = req.params;
 sql =  'SELECT nombre,id_asignaturas FROM ensenia NATURAL JOIN asignaturas WHERE ensenia.id_docente = ? AND ensenia.id_grupo = ?';
 querys(sql, [id_docente, id_grupo], res, true);
 }
/*
.......##.......##.########...#######...######..########
......##.......##..##.....##.##.....##.##....##....##...
.....##.......##...##.....##.##.....##.##..........##...
....##.......##....########..##.....##..######.....##...
...##.......##.....##........##.....##.......##....##...
..##.......##......##........##.....##.##....##....##...
.##.......##.......##.........#######...######.....##...
*/

// Se crea una actividad y se le asigna a un gru´po
createActividad =async (req, res = response)=>{
    const {
        id_periodo, 
        descripcion,
        id_grupo, 
        id_docente, 
        fecha_inicial,
        fecha_limite    
    } = req.body;
    
    // Se crea la actividad
    const sql1 = 'INSERT INTO actividad( id_periodo, descripcion) VALUES  (?,?)';
     querys(sql1, [id_periodo, descripcion], res, false);
    
    //se recupera el id de ultima actividad creada
    sql2 = 'SELECT MAX(id_actividad) as id_actividad FROM actividad';
    const result =await querys_return(sql2,[], res );

    //Se asigna la actividad al un determinado grupo    
    const sql3 = 'INSERT INTO asigna(id_actividad, id_grupo, id_docente, fecha_inicial, fecha_limite) VALUES (?,?,?,?,?)';
    querys(sql3,[result,id_grupo ,id_docente, fecha_inicial,fecha_limite], res, false);
   
   
    //se muestra el resultado de la actividad creada  
    const sql4= 'SELECT id_actividad, descripcion, fecha_inicial, fecha_limite FROM actividad NATURAL JOIN asigna WHERE id_actividad = ?'; 
    querys (sql4, [result], res, true);

}

agregarArchivos=(req, res = response)=>{

    const {
           id_actividad,
           peso,
           formato,
           nombre,
           ruta         
    } = req.body;
  const sql =  'INSERT INTO `archivo`(`id_actividad`, `peso`, `formato`, `nombre`, `ruta`) VALUES (?,?,?,?,?)';

  querys(sql,[id_actividad,peso, formato,nombre, ruta], res, true);
}





//Exports

module.exports = {
    asignaturas,
    listaEstudiantes,
    createActividad,
    agregarArchivos,
    grupos,
    grados,
    getGrado,
    getGrupo,
    getAsignatura

}
 



/*


    /////////
   /   * *   \ 
  /    {}     \ _____
  |             _____
  |  \  \      YO PUSE MI CODIGO AQUí XD
  |   \   \___ ___
  |     \  ___ ___



*/