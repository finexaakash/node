const express = require("express")
const  { v4 : uuidv4 } =  require('uuid')
const path = require("path")
const {handlesignup, handlelogin}  = require("../controller/users")

const router =express.Router();
router.post('/',handlesignup);
router.post('/login',handlelogin)
module.exports = router;
