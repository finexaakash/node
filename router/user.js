const express= require("express");
// const User = require("../model/user");
const {getalluser, getuserbyid, addnewuser,updateuserbyid,deleteuserbyid}  = require('../controller/user')
const router = express.Router();


router.route("/").get(getalluser)
.post(addnewuser);

router.route("/:id").get( getuserbyid)
.patch(updateuserbyid).delete(deleteuserbyid );

module.exports = router;