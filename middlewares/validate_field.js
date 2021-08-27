

const {response} = require('express');
const {validationResult} = require('express-validator');


const validarCampos = (req, res = response, next)=>{
    
    const err = validationResult(req);

    
    if(!err.isEmpty()){
        return res.status(400).json({
            ok: false,
            msg:'Algunos campos se encuentran vacios o son incorrectos',

            body: err.mapped()
        });
    }
    next();
}
module.exports = {
    validarCampos
}