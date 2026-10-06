const users = require("../model/users")
const  { v4 : uuidv4 } =  require('uuid')
const {getid, setid} = require("../service/auth")
const path = require("path")

async function handlesignup(req, res){
    const {name , email , password} = req.body;
    await users.create({
        name : name,
        email : email,
        password : password,
    });
    console.log(name);
   return res.render('home');
}
async function handlelogin(req, res){
    const {email , password} = req.body;
    const user  =await users.findOne({email ,password});
if(!user){
    return res.render('login')
}
const userid = uuidv4();
setid(userid, user )
res.cookie("uid", userid);


   
   return res.render('home');
}

module.exports = {handlesignup,handlelogin};