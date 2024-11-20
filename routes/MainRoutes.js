const router = require("express").Router()
const encoder = require("../middleware/bodyParser")
const {homePage,aboutPage,servicePage,featurePage,carsPage,testimonialPage
    ,contactUsPage,errorPage, contactUsStorePage, bookingPage,
    bookingStorePage,
    bookingConfirmation} = require("../controller/frontcontroller")

const AdminHomeRouter = require("./AdminRoutes/AdminRoutes")
router.get("/",homePage)
router.get("/booking",bookingPage)
router.post("/booking",encoder,bookingStorePage)
router.get("/about",aboutPage)
router.get("/service",servicePage)
router.get("/features",featurePage)
router.get("/cars",carsPage)
router.get("/testimonial",testimonialPage)
router.get("/contact",contactUsPage)
router.post("/contact",encoder,contactUsStorePage)
router.get("/booking-confirmation",bookingConfirmation)


//admin routes
router.use("/admin",AdminHomeRouter)


router.get("/*",errorPage)


module.exports=router