const express = require("express")
const cookieparser =require('cookie-parser')
const path = require("path")
const userrouter =  require("./router/users")
const connect = require('./connection')
const URL = require("./model/user")
const staticrouter = require("./router/staticrouter")
const router =require("./router/user")
const {checkid, check} = require ("./middlewire/auth")
const cookieParser = require("cookie-parser")
const app= express()
app.use(cookieParser());
connect( "mongodb://127.0.0.1:27017/urlshorter").then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
})
app.set("view engine","ejs");
app.set("views", path.resolve("./view"));
app.use(express.urlencoded({extended:false}))


app.use(express.json());

app.get("/test",async(req,res)=>{
    const allurl = await URL.find({});
    return res.render('home',{urls: allurl,});
})
app.use ("/user",userrouter);
app.use ("/",check,staticrouter);
app.use("/urls",checkid, router);
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
app.listen(8005, ()=>{
    console.log("server started")
})

