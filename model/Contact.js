const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is Required"],
    },

    email:{
        type:String,
        required:[true,"Email Field is Required"],
    },

    phone:{
        type:String,
        required:[true,"Phone Field is Required"],
    },

    subject:{
        type:String,
        required:[true,"Subject Field is Required"],
    },

    message:{
        type:String,
        required:[true,"Message Field is Required"],
    },

  date:{
    type:String
  },

    active:{
       type:Boolean,
       default:true
    }
})

const Contact = new mongoose.model("Contact", ContactSchema)

module.exports= Contact