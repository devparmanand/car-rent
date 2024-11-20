const { islogin} = require("../../middleware/roleCheckerMiddleware")
const AdminBookingRouter = require("express").Router()

const {home, remove,show, edit} =require("../../controller/admin/BookingControllers")

AdminBookingRouter.get("/",islogin , home)
AdminBookingRouter.get("/delete/:_id",islogin,remove)
AdminBookingRouter.get("/edit/:_id",islogin,edit)
AdminBookingRouter.get("/show/:_id",islogin,show)

module.exports=AdminBookingRouter






