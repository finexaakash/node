const { getid } = require("../service/auth")
async function checkid(req,res,next){
    const userid = req.cookies?.uid;
    if(!userid) return res.redirect('login');
    const user = getid(userid);
    if(!user)return res.redirect('login')

    req.user = user;
    next();

}
async function check(req,res,next){
    // const userid = req.cookies?.uid;
    const userid = req.headers["authorization"]
    if(!userid){
        return res.render("login");
    }
    console.log(userid)
 const token = userid.split("Bearer ")[1]
    const user = getid(token);
    console.log(user);

    req.user = user;
    next();

}

module.exports = {checkid, check};
