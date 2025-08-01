const express=require("express")
const app=express()
const {mongodb}=require("./config/DbConfig.js")
const route=require("./routes/ApiRoutes.js")
const cors=require("cors")


mongodb()

app.use(express.json())
app.use(express.urlencoded())


app.use(cors({
    origin:["http://localhost:5173","https://node-api-react.vercel.app"]
}))

app.get("/",(req,res)=>{
    res.send("hii hello")
})

app.use("/api/Todo/",route)

app.listen(3000,()=>{
    console.log("server running")
})