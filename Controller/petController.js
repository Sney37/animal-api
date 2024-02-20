const Pet = require('../Model/Pet')

//getdata
exports.getPet = async (req,res)=>{
    try {
        const data = await Pet.find().populate('owner')
        return res.json({errors:false,data:data})
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}

//postdata
exports.postPet = async (req,res)=>{
    try {
        const data = await Pet.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//updatedata
exports.updatePet = async (req,res)=>{
    try {
        const data = await Pet.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//deletedata
exports.deletePet = async (req,res)=>{
    try {
        const data = await Pet.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}




