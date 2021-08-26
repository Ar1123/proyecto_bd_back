//terceros
const express = require('express');
const app = express();
const cors = require('cors');


//locales
const routes = require('./routes/auth_routes');
const routesd = require('./routes/teacher');
const port = process.env.PORT || 3000 ;
app.use(cors());
app.use(express.json());
app.use('/school', routes);
app.use('/school', routesd);


app.listen(port, ()=>{
    console.log('Servidor ejecutando el port',port);

});