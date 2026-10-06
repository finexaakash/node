const fs = require('fs')
function logfile(filename){
    return ((req,res,next)=>{
    const data = `\n new request ${req.method}  `;
    fs.appendFile(filename,data , (err, da)=>{
if(err){
    console.log(err);
}
    })
    next();
})
}

module.exports = logfile;

