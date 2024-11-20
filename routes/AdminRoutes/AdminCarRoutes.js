const encoder = require("../../middleware/bodyParser")
const { islogin} = require("../../middleware/roleCheckerMiddleware")
const {carsUploader} = require("../../middleware/multerMiddleware")
const AdminCarRouter = require("express").Router()

const {home,create,store, remove, update, edit} =require("../../controller/admin/CarController")

AdminCarRouter.get("/",islogin , home)
AdminCarRouter.get("/create", islogin,create)
AdminCarRouter.post("/store",islogin,carsUploader.single("pic"),encoder,store)
AdminCarRouter.get("/delete/:_id",islogin,encoder,remove)
AdminCarRouter.get("/edit/:_id",islogin,encoder,edit)
AdminCarRouter.post("/update/:_id",islogin,carsUploader.single("pic"),encoder,update)

module.exports=AdminCarRouter






