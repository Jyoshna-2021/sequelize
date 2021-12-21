const {usertable,BookTranscation,Bookdetails}=require ("../models");
var gettranscation = async (req, resp)=> {
    try{
        const gettranscation= await BookTranscation.findAll();
        return resp.status(200).json(gettranscation)
    
    }catch(e){
        console.log(e)
        return resp.status(500).send(e);
    }

}
var posttranscation= async(req,resp)=>{
    const {UserId,BookId,BookName,IssueDate,duedate,renewdate}=req.body;
    try{
    const gettranscation= await BookTranscation.create( {UserId,BookId,BookName,IssueDate,duedate,renewdate});
     return resp.status(200).json(gettranscation)
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }
 var deleteBook = async (req, resp)=> {
  //  const userid = req.body.UserId;
    const id = req.params.BookId;
    try{
        const vBook = await BookTranscation.findOne({where: {BookId: id}});
        console.log(vBook);
        await vBook.destroy();
        return resp.status(200).end();
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}
 module.exports = {gettranscation,posttranscation,deleteBook}