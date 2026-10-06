const mongoose = require("mongoose")
// const model = require('./model/user')
async function mongoconnect(url){
   return await mongoose.connect(url);
}


module.exports = mongoconnect;