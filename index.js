const express = require ("express");
const morgan = require("morgan");
const routes = require ("./routes")
//segundo VAMOS A HACER E MIDDLERWARE QUE CONSOLEA EL BODY, puedo ponder autenticaciones #, covertit info, 

// function logBody(req, resp, next){
//     console.log(req.body)
//     next();
// }

//creo un toquen que poosteen solo los administradores
//se lo paso como argumento en el post PUMMMMMM

const app = express();
//app.use(express.json()) //no usar bordyparser porque esta deprecado, con esto parseamos el json.

app.use(morgan("dev")) 
//RUTAS
app.use(routes)
//app.use(logBody) // no hace falta que la invoque porque ya 

app.listen(8080);