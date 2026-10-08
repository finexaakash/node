
const jwt = require("jsonwebtoken")
const secrate = "aakash@343"
function setid(user){
   return jwt.sign({
    _id : user._id,
    email : user.email,
   },secrate);
}
function getid(token){
    if(!token) return null;
    try{
        console.log(jwt.verify(token,secrate))
return jwt.verify(token,secrate)
    }catch(err){
        return null;
    }
    
}
module.exports = {
    setid, getid,
}
