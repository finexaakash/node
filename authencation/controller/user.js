

const shortid = require("shortid");
const URL = require("../model/user");

async function handlercreate(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            error: "URL is required"
        });
    }

    const short = shortid();

    await URL.create({
        shorturl: short,
        redirector: body.url,
        visit: [],
        createdBy:req.user._id,
    });
return res.render('home', {id: short,})
  
}
async function visithis(req,res){
    const id =  req.params.shortid;
    const urlid  =await URL.findOne({
        shorturl :  id
    })
    return res.json({
        "totalresule" : urlid.visit.length,
        "ana" : urlid.visit

    })

}

module.exports = {handlercreate,visithis};