const {TodoModel}=require("../model/apimodel.js")


const getAllTodo=async(req,res)=>{
   try {
     const Tododata= await TodoModel.find()
     res.status(200).send(Tododata)
   } catch (error) {
      console.log(error.message)
      res.status(400).send("not Found")
   }
}

const getTodo=async(req,res)=>{
    try {
        const id=req.params.id
        const Todo= await TodoModel.findById(id)
        res.status(200).json({message:"match found",data:Todo})
    } catch (error) {
         console.log(error.message)
      res.status(400).send("not Found id")
    }
}

const addTodo=async(req,res)=>{
try {
    const {title,body}=req.body
    const data=new TodoModel({title:title,body:body})
    const saved=await data.save()
    res.status(200).json({message:"uploaded data",data:saved})
} catch (error) {
     console.log(error.message)
      res.status(400).send("not Found id")
}
}


const updateToDo=async(req,res)=>{
  try {
    const id=req.params.id
    const {title,content}= req.body
    const data=await TodoModel.findByIdAndUpdate(id,{title:title,body:content})
    res.status(200).json({message:"updated data",data:data})
  } catch (error) {
     console.log(error.message)
      res.status(400).send("not Found id")
  }
}


const deleteToDo=async(req,res)=>{
try {
    const id=req.params.id
    const DltData=await TodoModel.findByIdAndDelete(id)
    res.status(200).json({message:"deletd data successfully",data:DltData})
} catch (error) {
    console.log(error.message)
      res.status(400).send("not Found id")
}
}
module.exports={getAllTodo,getTodo,addTodo,updateToDo,deleteToDo}