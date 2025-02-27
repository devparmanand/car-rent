const hbs = require("hbs")

hbs.registerHelper("islogin", function (session) {
  return session && session.login ? true:false
})

hbs.registerHelper("userName", function (session) {
  return session && session.login ? session.name:""
})
hbs.registerHelper("checkRole", function (selectedRole,role) {
  return selectedRole===role ? "selected":""
})
// hbs.registerHelper("checkActive", function (selectedStatus,status) {
//   return selectedStatus===status ? "selected":""
// })
hbs.registerHelper("checkDropDown", function (selected,option) {
  return selected===option ? "selected":""
})
hbs.registerHelper("isSuperAdmin", function (session) {
  return session && session.role === "Super Admin" ? true:false

})

hbs.registerHelper("getDate", function (date) {
  return new Date(date).toLocaleDateString()

})