const express = require("express");
const {handlercreate ,visithis}= require("../controler/user");

const router = express.Router()

router.post('/',handlercreate);
router.get('/ana/:shortid',visithis);

module.exports =router;

