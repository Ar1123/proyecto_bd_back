const mysql = require('mysql');

const database = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3306',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'proyectobd' //cambia por el nombre de tu bd
};




const connection = mysql.createConnection(database);

connection.connect(err => {
    if (err) {
        console.log('Error en conexion conl a base de datos', err);
    } else {
        console.log('Conexión exitosa');
    }
});
module.exports = connection;