const express=require("express")
const route=express.Router()
const {getAllTodo,getTodo,addTodo, updateToDo, deleteToDo}=require("../controllers/ApiControls.js")


route.get("/getAllTodo",getAllTodo)

    route.get("/getTodo/:id",getTodo)

    route.post("/addTodo",addTodo)

    route.put("/updateToDo/:id",updateToDo)

    route.delete("/deleteToDo/:id",deleteToDo)

module.exports =route