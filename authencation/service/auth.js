const sessioniddata = new Map();
function setid(id,user){
    sessioniddata.set(id,user)
}
function getid(id){
    return sessioniddata.get(id);
}
module.exports = {
    setid, getid,
}