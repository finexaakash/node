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

const token = setid( user )
res.json({token})
// res.cookie("uid", token);


   
   return res.render('home');
}

module.exports = {handlesignup,handlelogin};
