
const express = require("express")
const handlesignup = require("../controller/users")
const model = require("../model/user")
const path = require("path")
const URL = require("../model/user")

const router = express.Router();
const  alluser = URL.find({});

router.get('/',async(req,res)=>{
    if(!req.user){
        return res.redirect("/login")
    }
    const urls =await  model.find({createdBy :req.user._id});

    return res.render ('home',{urls : urls});
})
router.get('/signup',async(req,res)=>{
    return res.render("signup");
})
router.get('/login',async(req,res)=>{
    return res.render("login");
})
module.exports = router;