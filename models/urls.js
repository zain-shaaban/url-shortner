const mongoose=require("mongoose");
const uniqueID=require("uniqid");

const urlSchema=new mongoose.Schema({
    long:{
        type:String,
        required:true,
        trim:true
    },
    short:{
        type:String,
        required:true,
        default:uniqueID()
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    }
})


module.exports=mongoose.model("Url",urlSchema);
