const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
    {
        name : String,
        age : Number,
        email : {type : String, required : true, unique : true}
    }
)


module.exports = mongoose.model('contact', contactSchema)