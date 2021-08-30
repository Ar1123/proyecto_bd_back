
const connectionDb = require('../database/config');



const querys = (sql, variablea, res, view = true) =>{
    try {
        connectionDb.query(sql, variablea, (err, rows)=>{
            if(err){
                console.log('sd ',err);
                 res.status(500).json(responses(false,500,"error interno",[]));  
            }else{
                if(rows.length>0){
                    res.status(200).json(responses(true,200,"Consulta exitosa",rows)); 
                } else if(rows.affectedRows>0){

                        if(view){
                            res.status(201).json(responses(true, 201, "Datos creados con exito", []));
                        }  
                } else{
                    
                   res.status(404).json(responses(false,404,"Datos no encontrados",[])); 
                }
            }    
       });
    } catch (error) {
            console.log(error,' eeeeee');
    }
}







const querys_return =(sql,variables, res) =>{


    return new Promise((resolve,reject)=>{
connectionDb.query(sql, variables,(err, rows)=>{
        if(err){
            reject(res.json(responses(false,500,"error interno",[])));

        } else{
            if(rows.length>0){
                    resolve(rows[0]['id_actividad']);
                  
            }else{

                reject(res.json(responses(false, 400, 'Actividad no encontrada',[])));
            }
        }
    });
        
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
    querys,

    querys_return
}