var express = require("express");
const {sequelize}=require("./models");
const {getadmins,postadmin}=require("./controller/admintablecontroller");
const { getuser, postuser } = require("./controller/usertablecontroller.js");
const {gettranscation,posttranscation,deleteBook}=require("./controller/booktranscationcontroller")
const { getbook, postbook } = require("./controller/bookdetailscontroller");
const app=express();
const cors=require('cors');

app.use(cors({
    origin:"*"
}));
app.use(express.json());

app.get("/admins",getadmins);
app.post("/admins",postadmin);
app.get("/users",getuser);
app.post("/users",postuser);
app.get("/transcation",gettranscation);
app.post("/transcation",posttranscation)
app.delete("/transcation/:BookId",deleteBook);
app.get("/books",getbook);
app.post("/books",postbook);
const PORT=6000;
app.listen({port:PORT},async()=>
   {console.log(`server running ${PORT}`)
   try{
   await sequelize.authenticate();
   }
   catch(e){
       console.log(e);
   }
});