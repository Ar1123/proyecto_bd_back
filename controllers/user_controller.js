const { response } = require("express");
const { querys } = require("../helpers/query_helpers");

comentario = (req, res = response)=>{
    const {
        id_actividad, 
        id_usuario, 
        fecha, 
        contenido
    }= req.body;

    const sql = 'INSERT INTO `comentario`(`id_actividad`, `id_usuario`, `fecha`, `contenido`) VALUES (?,?,?,?)';
     querys(sql, [id_actividad, id_usuario, fecha, contenido], res, true);   
}

datosUser= (req, res = response)=>{
    const {id} = req.params;
    sql = 'SELECT apellidos, nombres FROM usuario WHERE id_usuario = ?';
    querys(sql, [id], res, true);
}

module.exports ={

    comentario,
    datosUser
}
