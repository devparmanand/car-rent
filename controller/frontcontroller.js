const twilio = require("twilio");


const Testimonial= require("../model/Testimonial")
const Car= require("../model/Car")
const Contact= require("../model/Contact")
const Booking= require("../model/Booking")

const mailer = require("../mailer/index")
const twilioClint = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function   homePage(req,res){
    try {
        const testimonials = await Testimonial.find().sort({_id:1}) 
        const cars = await Car.find().sort({_id:1}) 
    res.render("index",{session:req.session,testimonials:testimonials,cars:cars})


    } catch (error) {
        console.log(error);
        
    }
}


async function   bookingPage(req,res){
    try {
        const testimonials = await Testimonial.find().sort({_id:1}) 
        const cars = await Car.find().sort({_id:1}) 
    res.render("booking",{session:req.session,title:"Booking",testimonials:testimonials,cars:cars})


    } catch (error) {
        console.log(error);
        
    }
}

async function   bookingStorePage(req,res){
    try {
        var data = new Booking(req.body)
        data.date= new Date()
        await data.save()

        await twilioClint.messages.create({
            body: `
                   Booking Confirmed
                   Hello  ${req.body.name} Your Booking Has Been Confirmed, Our Team Will Contact You Soon!!!
                        `,
            from: process.env.SMS_SENDER,
            to:req.body.phone.startsWith("+91")?req.body.phone:"+91"+req.body.phone,
            })
        // console.log(message);
        
        
        mailer.sendMail({
            sender:process.env.EMAIL_SENDER,
            to:req.body.email,
            subject:"Booking Recieved",
            html: `
           Booking Confirmed
                   Hello  ${req.body.name}
                   Your Booking Has Been Confirmed
                   Our Team Will Contact You Soon!!!
                 `,
        } ,(error)=>{
            if(error){
                console.log(error);
            }
            
        
        })
        
        
        mailer.sendMail({
            sender:process.env.EMAIL_SENDER,
            to:process.env.EMAIL_SENDER,
            subject:"New Booking Recieved",
            html: `
           <table border="2px" cellpadding="10px">
            <tr>
                <th>Name</th>
                <td>${req.body.name}</td>
            </tr>
        
            <tr>
                <th>Email</th>
                <td>${req.body.email}</td>
            </tr>
        
            <tr>
                <th>Phone</th>
                <td>${req.body.phone}</td>
            </tr>
        
            <tr>
                <th>Pickup</th>
                <td>${req.body.pickup}</td>
            </tr>
        
            <tr>
                <th>Drop</th>
                <td>${req.body.drop}</td>
            </tr>

            <tr>
                <th>Pickup Date</th>
                <td>${req.body.pickupDate}</td>
            </tr>

            <tr>
                <th>Car Name</th>
                <td>${req.body.car}</td>
            </tr>
        </table>
                 `,
        } ,(error)=>{
            if(error){
                console.log(error);
            }
        })

        res.redirect("/booking-confirmation")
    } catch (error) {
        errorMessage={}

        var testimonials = await Testimonial.find().sort({_id:1}) 
        var cars = await Car.find().sort({_id:1})

        error.errors?.name ?( errorMessage["name"] = error.errors?.name.message) : ""
        error.errors?.email ?( errorMessage["email"] = error.errors?.email.message) : ""
        error.errors?.phone ?( errorMessage["phone"] = error.errors?.phone.message) : ""
        error.errors?.car ?( errorMessage["car"] = error.errors?.car.message) : ""
        error.errors?.pickup ?( errorMessage["pickup"] = error.errors?.pickup.message) : ""
        error.errors?.drop ?( errorMessage["drop"] = error.errors?.drop.message) : ""
        error.errors?.pickupDate ?( errorMessage["pickupDate"] = error.errors?.pickupDate.message) : ""
    if(req.body.page === "Home")
    res.render("index",{session:req.session,title:"Booking",testimonials,cars,data:data,errorMessage})
    else
    res.render("booking",{session:req.session,title:"Booking",testimonials,cars,data,errorMessage})
     console.log(error);
        
    }
}

async function bookingConfirmation(req,res){
    var testimonials = await Testimonial.find().sort({_id:1}) 
    res.render("booking-confirm", {title:"Booking-Confirmation",testimonials})
}

function aboutPage(req,res){
    res.render("aboutPage",{session:req.session,title:"About Us"})
}

function servicePage(req,res){
    res.render("servicePage",{session:req.session,title:"Services"})
}
function featurePage(req,res){
    res.render("featurePage",{session:req.session,title:"Features"})
}
async function carsPage(req,res){
   try {
    const cars = await Car.find().sort({_id:1}) 

    res.render("carsPage",{session:req.session,title:"Cars" ,cars:cars})
   } catch (error) {
    console.log(error);
    
   }
}

async function testimonialPage(req,res){
    try {
        const testimonials = await Testimonial.find().sort({_id:1}) 
    res.render("testimonialPage",{session:req.session,title:"Testimonial",testimonials:testimonials})


    } catch (error) {
        console.log(error);
        
    }
}

function contactUsPage(req,res){
    res.render("contact",{session:req.session,title:"Contact Us", errotMessage:{} , data:{},show:false})
}
async function contactUsStorePage(req,res){
try {
    var data = new Contact(req.body)
    data.date  = new Date()
  await  data.save()

  await twilioClint.messages.create({
    body: `
           Query Recieved
           Thanks  ${req.body.name} Your Query Has Been Recieved Our Team Will Contact You Soon!!!
                `,
    from: process.env.SMS_SENDER,
    to:req.body.phone.startsWith("+91")?req.body.phone:"+91"+req.body.phone,
    })
console.log(message);


mailer.sendMail({
    sender:process.env.EMAIL_SENDER,
    to:req.body.email,
    subject:"Query Recieved",
    html: `
    Query Recieved
    Thanks  ${req.body.name}, 
    Your Query Has Been Recieved 
    Our Team Will Contact You Soon!!!
         `,
} ,(error)=>{
    if(error){
        console.log(error);
    }
    

})


mailer.sendMail({
    sender:process.env.EMAIL_SENDER,
    to:process.env.EMAIL_SENDER,
    subject:"New Query Recieved",
    html: `
   <table border="2px" cellpadding="10px">
    <tr>
        <th>Name</th>
        <td>${req.body.name}</td>
    </tr>

    <tr>
        <th>Email</th>
        <td>${req.body.email}</td>
    </tr>

    <tr>
        <th>Phone</th>
        <td>${req.body.phone}</td>
    </tr>

    <tr>
        <th>Subject</th>
        <td>${req.body.subject}</td>
    </tr>

<tr>
        <th>Message</th>
        <td>${req.body.message}</td>
    </tr>
</table>
         `,
} ,(error)=>{
    if(error){
        console.log(error);
    }
})


res.render("contact",{session:req.session,title:"Contact Us", errotMessage:{} , data:{} ,show:true})
     } catch (error) {
    console.log(error);
    errorMessage={}
    error.errors?.name ?( errorMessage["name"] = error.errors?.name.message) : ""
    error.errors?.email ?( errorMessage["email"] = error.errors?.email.message) : ""
    error.errors?.phone ?( errorMessage["phone"] = error.errors?.phone.message) : ""
    error.errors?.subject ?( errorMessage["subject"] = error.errors?.subject.message) : ""
    error.errors?.message ?( errorMessage["message"] = error.errors?.message.message) : ""
    res.render("contact", { errorMessage:errorMessage,data:data,show:false})
    
}
}

function errorPage(req,res){
    res.render("404",{session:req.session,title:"404! Page Not Found"})
}

module.exports={
    homePage,
    aboutPage,
    servicePage,
    featurePage,
    carsPage,
    testimonialPage,
    contactUsPage,
    errorPage,
    contactUsStorePage,
    bookingPage,
    bookingStorePage,
    bookingConfirmation
}



