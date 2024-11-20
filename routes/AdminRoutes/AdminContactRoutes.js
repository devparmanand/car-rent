const { islogin} = require("../../middleware/roleCheckerMiddleware")
const AdminContactRouter = require("express").Router()

const {home, remove,show, edit} =require("../../controller/admin/ContactControllers")

AdminContactRouter.get("/",islogin , home)
AdminContactRouter.get("/delete/:_id",islogin,remove)
AdminContactRouter.get("/edit/:_id",islogin,edit)
AdminContactRouter.get("/show/:_id",islogin,show)

module.exports=AdminContactRouter






