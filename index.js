

const express = require("express")
// const module = require('./model/user')
const userrouter = require('./router/user')
const mongoconnect = require('./connnection')
const fs = require("fs")
const logfile = require('./middlewires/user')
// const { type } = require("os");

// const { json } = require("stream/consumers");
// const { takeCoverage } = require("v8");
// const { log } = require("console")

const app = express();


app.use(express.urlencoded({extended:false}))

mongoconnect("mongodb://127.0.0.1:27017/meradb").then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
console.log(err)
})
app.use(logfile("log.txt"));



app.use("/user", userrouter);

app.listen(8000,()=>{
console.log("work");
})