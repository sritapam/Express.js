const express = require("express")
const isAdmin = require("./isAdmin")

const routes =express.Router();

let prevId = 0;
let toDos = []
// primero VAMOS A HACER UNA API REST
//app.get era antes de pasarlo a router
routes.get('/', (req, res)=>{
    res.json(toDos);
})

//los params siempre son strings...
//routes.get('/todo/:id', (req, resp)=>{ 
routes.get('/:id', (req, resp)=>{
    const todo = toDos.find(({id})=> id === parseInt(req.params.id))
    if(todo){
        return resp.json(todo)
    } else return resp.sendStatus(404);
})
//http://127.0.0.1:8080/todo?apiKey=abcd asi deberiamos de poner ahora para poder postear

//routes.post('/todo', isAdmin, (req, res)=>{
routes.post('/', isAdmin, (req, res)=>{
 if(typeof req.body.title !== 'string') return res.sendStatus(400)   // solo me toma un string
    const todo = {
        id: ++prevId,
        complete: false,
        ...req.body
    }
    toDos.push(todo)
    res.status(201).json(todo)
})
//http://127.0.0.1:8080/todo/1?apiKey=abcd
//routes.put('/todo/:id', isAdmin, (req, resp)=>{
routes.put('/:id', isAdmin, (req, resp)=>{
    const todo = toDos.find(({id})=> id === parseInt(req.params.id))
    if(todo){
        todo.complete = true;
        return resp.status(202).json(todo);
    } else return resp.sendStatus(400); //bad request- sintaxis invalida. si el todo no existe
})

//routes.delete('/todo/:id', isAdmin, (req, resp)=>{
routes.delete('/:id', isAdmin, (req, resp)=>{
    const todo = toDos.find(({id})=> id === parseInt(req.params.id))
    if(todo){
    const todo = toDos.filter(({id})=> id !== parseInt(req.params.id))
        return resp.sendStatus(202) //aceptado

    } else return resp.sendStatus(400); //bad request- sintaxis invalida. si el todo no existe
})

module.exports = routes;

//complet con un put/ delete/ get de uno 
// USAREMOS UN MIDLEWARS MORGAN - npm i morgan
// se le pone app.use(morgan()) y te trae una data de lo que pasa en nuestras rutas.