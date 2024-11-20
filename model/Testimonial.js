const mongoose = require("mongoose")

const TestimonialSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is Required"],
    },

    message:{
        type:String,
        required:[true,"Message Field is Required"],
    },

    pic:{
        type:String,
        required:[true,"Pic Field is Required"],
     },

    active:{
       type:Boolean,
       default:true
    }
})

const Testimonial = new mongoose.model("Testimonial", TestimonialSchema)

module.exports= Testimonial