const encoder = require("../../middleware/bodyParser")
const { islogin} = require("../../middleware/roleCheckerMiddleware")
const {testimonialsUploader} = require("../../middleware/multerMiddleware")
const AdminTestimonialRouter = require("express").Router()

const {home,create,store, remove, update, edit} =require("../../controller/admin/TestimonialController")

AdminTestimonialRouter.get("/",islogin , home)
AdminTestimonialRouter.get("/create", islogin,create)
AdminTestimonialRouter.post("/store",islogin,testimonialsUploader.single("pic"),encoder,store)
AdminTestimonialRouter.get("/delete/:_id",islogin,encoder,remove)
AdminTestimonialRouter.get("/edit/:_id",islogin,encoder,edit)
AdminTestimonialRouter.post("/update/:_id",islogin,testimonialsUploader.single("pic"),encoder,update)

module.exports=AdminTestimonialRouter






