const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/cental")
// .then(()=>{
//     console.log("Database is Connected");
    
// })

// .catch((error)=>{
//     console.log(error);
    
// })


async function getConnect() {
    try {
        await  mongoose.connect("mongodb://localhost:27017/cental")
        console.log("Database is Connected");
        
    } catch (error) {
        console.log(error);
        
    }
    
}
getConnect()


























