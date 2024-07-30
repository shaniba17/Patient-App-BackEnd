const mongoose=require("mongoose")
const loginSchema=mongoose.Schema(
    {
        username:String,password:String
    }
)

const loginmodel=mongoose.model("logininfo",loginSchema)
module.exports=loginmodel