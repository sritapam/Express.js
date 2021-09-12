const express = require("express")
const todoRoutes = require("./todoRoutes")

const routes =express.Router();

routes.use('/todo', todoRoutes)

module.exports = routes;

//complet con un put/ delete/ get de uno 
// USAREMOS UN MIDLEWARS MORGAN - npm i morgan
// se le pone app.use(morgan()) y te trae una data de lo que pasa en nuestras rutas.