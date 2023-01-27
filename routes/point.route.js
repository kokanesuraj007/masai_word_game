const express = require("express");
const pointRouter=express.Router()
const { PointModel } = require("../models/wordModel");





pointRouter.get("/",async(req,res)=>{
        const data=await PointModel.find().limit(10)
        res.send({"data":data,"msg":"hi"})
   
   
})

pointRouter.get("/getrandom",async(req,res)=>{


    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

              return result;

         }
         let num=Math.floor(Math.random() * (10 - 7) + 7)

         let alph=generateString(num)

        res.send({"string":alph.toLocaleLowerCase(),"msg":"Here is your random word"})
   
   
})

pointRouter.post("/addusers",async(req,res)=>{
    const {name,level,score}=req.body
    
    const new_point= new PointModel({
      name,
      score,
      level
    })
    await new_point.save()

    res.send({new_point})
})


module.exports={pointRouter}