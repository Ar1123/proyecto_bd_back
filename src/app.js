const express = require('express');

const mysql = require('mysql');
const mycon = require('express-myconnection');
const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 3000);

const DATABASE = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'id16530229_proyectofinalbd2'
};

app.use(mycon(mysql, DATABASE, 'single'));

app.use(express.json());

app.use('/', routes);
app.listen(app.get('port'), () => {

    console.log(`Ejecutando en el puerto ${app.get('port')}`);
});