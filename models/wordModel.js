const mongoose=require("mongoose")

const pointSchema=new mongoose.Schema({
    name:{type:String,required:true},
    level:{type:String,enum:['Hgh',"Medium",'Low']},
    score:{type:Number,default:0}

})

const PointModel=mongoose.model("user",pointSchema)

module.exports={PointModel}