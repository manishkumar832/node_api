const mongoose=require("mongoose")
const url="mongodb://localhost:27017/"

async function mongodb(){
   try {
    await mongoose.connect(url,{dbName:"apiDemo"})
    console.log("database created")

   } catch (error) {
       console.log(error)
   }
}

module.exports ={mongodb}