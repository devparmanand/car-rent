const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is Required"],
    },

    username:{
        type:String,
        unique:true,
        required:[true,"User Name Field is Required"],
    },

    email:{
        type:String,
        unique:true,
        required:[true,"Email Field is Required"],
    },

    phone:{
        type:String,
        required:[true,"Phone Field is Required"],
    },

    password:{
        type:String,
        require:[true,"Password Field is Mandatory"]
    },
    
    otp:{
        type:String,
    },
    pic:{
        type:String,
        require:[true,"Pic Field is Mandatory"]

    },
    role:{
       type:String,
       default:"Admin"
    }
})

const User = new mongoose.model("User", UserSchema)

module.exports= User