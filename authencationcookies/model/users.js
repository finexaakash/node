const mongoose = require("mongoose");

const useschema = new mongoose.Schema({
    name : {
        type: String,
        required : true,


    },
    email:{
        type: String,
        required: true,
        unique : true,
    },
    password:{
        type: String,
        required: true,
    }
},{
    timestamps:true
})

const users = mongoose.model("users",useschema)

module.exports =  users
