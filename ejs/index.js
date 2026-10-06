const express = require("express")
const path = require("path")
const connect = require('./connection.js')
const URL = require("./model/user")
const staticrouter = require("./router/staticrouter")
const router =require("./router/user")
const app= express()

connect( "mongodb://127.0.0.1:27017/urlshorter").then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
})
app.set("view engine","ejs");
app.set("views", path.resolve("./view"));
app.use(express.urlencoded({extended:false}))

app.use(express.json());
app.use ("/",staticrouter);
app.get("/test",async(req,res)=>{
    const allurl = await URL.find({});
    return res.render('home',{urls: allurl,});
})
app.use("/urls",router);
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
app.listen(8002, ()=>{
    console.log("server started")
})

