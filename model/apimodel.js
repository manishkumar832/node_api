const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:{type:String,required:true,minLenght:3,trim:true,unique:true,uppercase:true},
    body:{type:String,required:true,minLenght:3,trim:true},
   
},
 {timestamps:true}
)

const TodoModel=mongoose.model("ToDo",todoSchema)

module.exports={TodoModel}