const mongoose = require("mongoose")

const BookingSchema = mongoose.Schema({
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

    car:{
        type:String,
        required:[true,"Car Field is Required"],
    },

    pickup:{
        type:String,
        required:[true,"Pickup Field is Required"],
    },

    drop:{
        type:String,
        required:[true,"Drop Field is Required"],
    },

  pickupDate:{
    type:String,
    required:[true,"PickupDate Field is Required"],

  },

    active:{
       type:Boolean,
       default:true
    }
})

const Booking = new mongoose.model("Booking", BookingSchema)

module.exports= Booking