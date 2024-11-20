const AdminHomeRouter = require("express").Router()
// const bodyParser = require("body-parser");
// const encoder = new bodyParser.urlencoded()
const encoder= require("../../middleware/bodyParser")
const {usersUploader}=require("../../middleware/multerMiddleware")
const {islogin} = require("../../middleware/roleCheckerMiddleware")

const {home,login, loginStore, logout, profileUpdate, profileUpdateStore} =require("../../controller/admin/homecontroller")

AdminHomeRouter.get("/",islogin,home)
AdminHomeRouter.get("/login",login)
AdminHomeRouter.post("/login",encoder,loginStore)
AdminHomeRouter.get("/logout",logout)
AdminHomeRouter.get("/update-profile",islogin,profileUpdate)
AdminHomeRouter.post("/update-profile",islogin,encoder,usersUploader.single("pic"),profileUpdateStore)

module.exports=AdminHomeRouter

