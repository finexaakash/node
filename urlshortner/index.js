const express = require("express")
const connect = require('./connection')
const URL = require("./model/user")
const router =require("./router/user")
const app= express()
app.use(express.json());
connect( "mongodb://127.0.0.1:27017/urlshorter").then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
})
app.use("/url",router);
app.get("/:shortid", async(req,res)=>{
    const short = req.params.shortid;
   const entry =  await URL.findOneAndUpdate({
        shorturl : short
    },{
$push:{
    visit: {
        timestamps : Date.now()
    }
}
    }
    )

    res.redirect(entry.redirector);
})



//     return res.redirect(entry.redirector);
// });
app.listen(8001, ()=>{
    console.log("server started")
})

