// const http = require("http")
// const fs = require("fs")
// const url = require("url")

// const myserver = http.createServer((req,res)=>{
//     // console.log(" working")
//     fs.appendFile("log.txt","\nnew request",(err,data)=>{
 
//     })
//     const urlpar = url.parse(req.url,true);
//     switch(urlpar.pathname){

//         case "/" : 
//         res.end("home page");
//         break;
//         case"/about" : 
//         const a =  urlpar.query.name;
        
//         res.end(`hi this is work ${a}`);
//         break;
//         default : res.end("no data");
//     }
    
   
// });
// myserver.listen(8000,()=>{
//     console.log("wokingcondition")});

const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA (1).json");
const { json } = require("stream/consumers");
const app = express();
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    const data = `\n new request ${req.method}  `;
    fs.writeFile("log.txt",data , (err, data)=>{
if(err){
    console.log(err);
}
    })
    next();
})
app.get('/users',(req,res)=>{
    const html = `
    ${users.map((user)=>`<li> ${user.first_name} </li>`).join("")}
    `
    return res.send(html);
})
app.get('/api/users', (req,res)=>{
    return res.json(users);
})
app.get('/api/users/:id', (req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)
    return res.json(user);
})
app.post('/api/users', (req,res)=>{
    
    const bd = req.body;
    if(!bd || !bd.first_name||!bd.last_name ||!bd.email || !bd.gender){
        return res.json({status : " all field are require"});
    }
    users.push({...bd, id: users.length+1})
    fs.writeFile("MOCK_DATA (1).json",JSON.stringify(users),(err,resule)=>{
        console.log(err);
        return res.status(202).json({status: "pending"});
    })

    
})

app.post('/api/users/:id', (req,res)=>{
    return res.json({status: "penddding"});
})

app.post('/api/users/:id', (req,res)=>{
    return res.json({status: "psencdingg"});
})


app.listen(8000,()=>{
console.log("work");
})













// //////mongodb part


// const express = require("express")
// const fs = require("fs")
// const mongoose = require("mongoose");
// const { type } = require("os");

// const { json } = require("stream/consumers");
// const { takeCoverage } = require("v8");
// const app = express();
// app.use(express.urlencoded({extended:false}))
// mongoose.connect("mongodb://127.0.0.1:27017/meradb").then(()=>{
// console.log("mongodbconnecd")
// }).catch((err)=>{
//     console.log(err)
// })
// const usershcema = new mongoose.Schema ({
//     first_name:{
//         type: String,
//         required: true,
//     },
//     last_name:{
//         type: String,
        
//     },
//     email:{
//         type: String,
//         required: true,
//         unique : true,
//     },
//     gender:{
//         type: String,
//     }

// },{
//     timestamps: true,
// })
// const User = mongoose.model("user", usershcema)


// app.get('/users',async(req,res)=>{
//     const allusers = await User.find({});

//     const html = `
// <ul>
//     ${allusers.map(user =>
//         `<li>${user.first_name} - ${user.last_name}</li>`
//     ).join("")}
// </ul>
// `;

//     return res.send(html);
// })
// app.get('/api/users', async(req,res)=>{
//     const allusers = await User.find({});
//     return res.json(allusers);
// })
// app.get('/api/users/:id', async(req,res)=>{
//     const user = await User.findById(req.params.id)
   
//     return res.json(user);
// })
// app.post('/api/users', async(req,res)=>{
    
//     const bd = req.body;
//     if(!bd || !bd.first_name||!bd.last_name ||!bd.email || !bd.gender){
//         return res.json({status : " all field are require"});
//     }
//     const a = await User.create({
//         first_name : bd.first_name,
//         last_name : bd.last_name,
//         email : bd.email,
//         gender : bd.gender,
//     })
//   console.log(a);
//   return res.status(201).json({created :"sucess"});
    
// })

// app.patch('/api/users/:id', async(req,res)=>{
// await User.findByIdAndUpdate(req.params.id , {last_name : "meraland"});
//     return res.json({status: "done"});
// })

// app.delete('/api/users/:id', async(req,res)=>{
// await User.findByIdAndDelete(req.params.id)
//     return res.json({status: "psencdingg"});
// })


// app.listen(8000,()=>{
// console.log("work");
// })
// ////