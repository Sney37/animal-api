const User = require('../Model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//getdata
exports.getData = async (req,res)=>{
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//postdata//register
exports.postData = async (req,res)=>{
    try {
        const emailExist = await User.findOne({email:req.body.email})
        if(emailExist)return res.status(400).json({errors:true,error:"user already exists"})

        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const data = await User.create(req.body)
        return res.json({errors:false,data:data})

    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}

//updatedata
exports.updateData = async (req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//daletedata
exports.deleteData = async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//login
exports.login = async (req,res)=>{
    try {
        const userExist = await User.findOne({email:req.body.email})
        if(!userExist)return res.status(400).json({errors:true,error:"email or password invalid"})

        const validPassword = await bcrypt.compare(req.body.password,userExist.password)
        if(!validPassword)return res.status(400).json({errors:true,error:"email or password invalid"})

        const token = await jwt.sign({id:userExist._id},process.env.SEC)

        return res.json({errors:false,data:{User:userExist,token:token}})
    } catch (error) {
        return(res.status(400).json({errors:true,message:error.message}))
    }
}