const { response } = require("express");
const { querys } = require("../helpers/query_helpers");





/*
.......##.......##..######...########.########
......##.......##..##....##..##..........##...
.....##.......##...##........##..........##...
....##.......##....##...####.######......##...
...##.......##.....##....##..##..........##...
..##.......##......##....##..##..........##...
.##.......##........######...########....##...
*/

asignaturas = (req, res = response)=>{
    // console.log(req.id);
    const id =  req.params.id;
    console.log(req.params);

    const sql =   'SELECT asignaturas.nombre FROM asignaturas NATURAL JOIN ensenia WHERE ensenia.id_docente = ? GROUP BY(asignaturas.nombre)';

    querys(sql,[id], res);
}


listaEstudiantes = (req, res = response)=>{
    const {id} = req.params

    const sql = 'SELECT id_usuario, nombres, apellidos, identificacion, sexo FROM estudiante NATURAL JOIN usuario WHERE estudiante.id_grupo = ? AND estudiante.id_estudiante = usuario.id_usuario';
    
    querys(sql,[id], res);
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


createActividad = (req, res = response)=>{
    const {idp, nombre, descripcion} = req.body;
    
    const sql = 'INSERT INTO actividad( id_periodo, descripcion) VALUES  (?,?)';
    querys(sql, [idp, descripcion], res);
}



//Exports

module.exports = {
    asignaturas,
    listaEstudiantes,
    createActividad
}
 



/*


    /////////
   /   * *   \ 
  /    {}     \ _____
  
  |  \  \      YO PUSE MI CODIGO AQUí XD
  |   \   \___  
  |     \  ___ 



*/