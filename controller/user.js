const User = require('../model/user')
 
 async function getalluser (req,res){
    const allusers = await User.find({});
    return res.json(allusers);
}


async function getuserbyid (req,res){
    const user = await User.findById(req.params.id)
   
    return res.json(user);
}

async function addnewuser(req,res){
    
    const bd = req.body;
    if(!bd || !bd.first_name||!bd.last_name ||!bd.email || !bd.gender){
        return res.json({status : " all field are require"});
    }
    const a = await User.create({
        first_name : bd.first_name,
        last_name : bd.last_name,
        email : bd.email,
        gender : bd.gender,
    })
  console.log(a);
  return res.status(201).json({created :"sucess"});
    
}
async function updateuserbyid(req,res){
await User.findByIdAndUpdate(req.params.id , {last_name : "meraland"});
    return res.json({status: "done"});
}

async function deleteuserbyid(req,res){
await User.findByIdAndDelete(req.params.id)
    return res.json({status: "psencdingg"});
}
module.exports= { getalluser ,getuserbyid, addnewuser,updateuserbyid, deleteuserbyid}