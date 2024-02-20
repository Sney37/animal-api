const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'animalUser'
    }
})

module.exports = mongoose.model('pet',petSchema)