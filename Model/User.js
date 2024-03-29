const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    mobileNo : {
        type : Number,
        required : true
    }

})

module.exports = mongoose.model('animalUser',userSchema)