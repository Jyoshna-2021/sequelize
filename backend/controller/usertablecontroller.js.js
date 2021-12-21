const {usertable,BookTranscation,BookDE}=require ("../models");
var getuser = async (req, resp)=> {
    try{
        const userget= await usertable.findAll();
        return resp.status(200).json(userget)
    
    }catch(e){
        console.log(e)
        return resp.status(500).send(e);
    }

}
var postuser = async(req,resp)=>{
    const { UserName,MobileNumber,emailid,Organization,password}=req.body;
    try{
    const userget= await usertable.create( {UserName,MobileNumber,emailid,Organization,password});
     return resp.status(200).json(userget)
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }


module.exports = {getuser,postuser}