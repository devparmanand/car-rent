const encoder = require("../../middleware/bodyParser")
const { superAdminChecker} = require("../../middleware/roleCheckerMiddleware")

const AdminUserRouter = require("express").Router()

const {home,create,store, remove, update, edit} =require("../../controller/admin/Usercontroller")

AdminUserRouter.get("/",superAdminChecker , home)
AdminUserRouter.get("/create", superAdminChecker,create)
AdminUserRouter.post("/store",superAdminChecker,encoder,store)
AdminUserRouter.get("/delete/:_id",superAdminChecker,encoder,remove)
AdminUserRouter.get("/edit/:_id",superAdminChecker,encoder,edit)
AdminUserRouter.post("/update/:_id",superAdminChecker,encoder,update)

module.exports=AdminUserRouter






