
const connectionDb = require('../database/config');



const querys = (sql, variablea, res) =>{
    connectionDb.query(sql, variablea, (err, rows)=>{
             if(err){
                  res.json(responses(false,500,"error interno",[]));  
             }else{
                 if(rows.length>0){
                    res.json(responses(true,200,"Consulta exitosa",[rows[0]])); 
                 }else{
                    res.json(responses(false,404,"Datos no encontrados",[])); 
                 }
             }    
        });
}
const responses = (status = false,code, msg, body)=>{
   return  {
        "ok":status,
         "statusCode":code,   
         msg,
         body
    } ;
}

module.exports ={
    querys
}