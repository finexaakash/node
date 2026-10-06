const mongoose = require("mongoose")
const usershcema = new mongoose.Schema ({
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        
    },
    email:{
        type: String,
        required: true,
        unique : true,
    },
    gender:{
        type: String,
    }

},{
    timestamps: true,
})
const User = mongoose.model("user", usershcema)

module.exports = User;