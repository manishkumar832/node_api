const express=require("express")
const app=express()
const {mongodb}=require("./config/DbConfig.js")
const route=require("./routes/ApiRoutes.js")


mongodb()

app.use(express.json())
app.use(express.urlencoded())


app.get("/",(req,res)=>{
    res.send("hii hello")
})

app.use("/api/Todo/",route)

app.listen(3000,()=>{
    console.log("server running")
})