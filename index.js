const express = require("express")
const hbs = require("hbs")
const session = require("express-session")

require("dotenv").config()
const app = express()

app.set("view engine","hbs")
app.use(express.static("./public"))  //this is use to set path of public folder which contains css,js and images
hbs.registerPartials("./views/partials")
app.use(express.static("public"))
app.use("/public",express.static("./public"))  //use this line to server public folder



app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave:true,
    saveUninitialized: true,
    cookie: { secure: false }
  }))




// require("./helpers/helpers")
require("./helpers/index")

require("./db_connect")


const router = require("./routes/MainRoutes")

app.use("",router)

app.listen(8000,console.log("Server is Running at http://localhost:8000")
)


