const { response } = require("express");
const { querys } = require("../helpers/query_helpers");

asignaturas = (req, res = response)=>{
    // console.log(req.id);
    const id =  req.params.id;
    console.log(req.params);

    const sql =   'SELECT asignaturas.nombre FROM asignaturas NATURAL JOIN ensenia WHERE ensenia.id_docente = ?';

    querys(sql,[id], res);
}



module.exports = {
    asignaturas,
}
 