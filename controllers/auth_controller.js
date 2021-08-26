const { response } = require("express");

const connectionDb = require('../database/config');
const{querys} = require('../helpers/query_helpers');

login =(req, res = response) =>{
    
    const {usuario, contrasenia} = req.body;
    const sql = 'SELECT id_usuario, rol FROM credenciales WHERE usuario = ? AND contrasenia = ?';
    querys( sql, [usuario, contrasenia], res);

}
module.exports = {
    login,
}