
const mongoose = require("mongoose")

const Urlschema = new mongoose.Schema({

    shorturl :{
        type : String,
        required: true,
        unique: true

        
    },

    redirector:{
        type: String,
        unique : true,
    },

    visit:[{
        Timestams : {type: Number}
    }],

},
{
    timestamps: true,
})

const URL  = mongoose.model('url', Urlschema);

module.exports  = URL;