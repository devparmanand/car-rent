function superAdminChecker(req,res,next){
if( req.session && req.session.role === "Super Admin")  
     next()
else if( req.session && req.session.login)   
res.redirect("/404Error")
else
res.redirect("/admin/login")
}

function islogin(req,res,next){
    if(req.session && req.session.login)  
        next()
   else    
   res.redirect("/admin/login")
    }


module.exports={
    islogin,
    superAdminChecker

}