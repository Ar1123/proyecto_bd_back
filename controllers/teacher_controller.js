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
     querys(sql1, [id_periodo, descripcion], res, true);
    
    //se recupera el id de ultima actividad creada de acuerdo al docente
    
    sql2 = 'SELECT id_actividad FROM actividad where descripcion = ?';
    const result =await querys_return(sql2,[descripcion], res, true );
    
    //Se asigna la actividad al un determinado grupo
    
    const sql3 = 'INSERT INTO asigna(id_actividad, id_grupo, id_docente, fecha_inicial, fecha_limite) VALUES (?,?,?,?,?)';
     
    querys(sql3,[result,id_grupo ,id_docente, fecha_inicial,fecha_limite], res, false);
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
    agregarArchivos
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