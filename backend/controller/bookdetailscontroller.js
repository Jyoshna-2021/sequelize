const {Bookdetails,BookTranscation,usertables}=require ("../models");
var getbook = async (req, resp)=> {
    try{
        const getbooks= await Bookdetails.findAll();
        return resp.status(200).json(getbooks)
    
    }catch(e){
        console.log(e)
        return resp.status(500).send(e);
    }

}
var postbook= async(req,resp)=>{
    const {title,author,edition,publisher,isbn,genre,url}=req.body
    try{
    const getbooks= await Bookdetails.create( {title,author,edition,publisher,isbn,genre,url});
     return resp.status(200).json(getbooks)
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }
 module.exports = {getbook,postbook}