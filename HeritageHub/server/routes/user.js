const express=require('express')
const bcrypt=require('bcrypt')
const user_template=require('../utils/token_template')
const route=express.Router()
const jwt = require('jsonwebtoken')
const User=require('../models/user')

 route.post('/login',async (req,res)=>{
    console.log("body : ",req.body)
    const {email,password}=req.body
    const user=await User.findOne({email:email})
    if(!user){
       return res.status(500).json("email does not exist.")
    }

    const check=bcrypt.compare(password,user.password)
    if(!check){
        return res.status(500).json("incorrect password..")
    }
    let user_data={...user_template}
    for(let key of Object.keys(user_data)){
        user_data[key]=user[key]
    }
    console.log("user token data : ",user_data)
    let token=jwt.sign({data:user_data},"softhand",{
        expiresIn:'7d'
    })
    return res.status(200).json({
          message:'Learner Login Successfully!!',
          auth: true,token:token ,
          user_data:user_data
      })
})
route.post('/register', async (req,res)=>{
    console.log("Body:",req.body)
    const user=await User.findOne({email:req.body.email})
    if(user){
        return res.status(500).json("user already exist.")
    }
    bcrypt.hash(req.body.password,10)
    .then((hased_password)=>{
        req.body.password=hased_password
        const user=new User(req.body)
         user.save()
        .then((data)=>{
            console.log("Documented inserted successfully...",data)
            return res.status(200).json("Documented inserted successfully...")
        })
        .catch((err)=>{
            console.log("error inseting the user",err)
            return res.status(500).json("Error in insertion ...")
        })
    })
    .catch((err)=>{
        console.log("Error in hashing the password",err)
        return res.status(500).send("Error in hashing the password ...")
    })
})

route.get("/welcome",(req,res)=>{
    res.send("welcome "+req.body.name)
})

module.exports=route