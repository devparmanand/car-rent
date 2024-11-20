const mongoose = require("mongoose")

const CarSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is Required"],
    },

    rating:{
        type:Number,
        required:[true,"Rating Field is Required"],
    },

    rent:{
        type:Number,
        required:[true,"Rent Field is Required"],
    },

    seatingCapacity:{
        type:Number,
        required:[true,"Seating Capacity Field is Required"],
    },

    mode:{
        type:String,
        required:[true,"Mode Field is Required"],
    },

    fuelType:{
        type:String,
        required:[true,"Rating Field is Required"],
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

const Car = new mongoose.model("Car", CarSchema)

module.exports= Car