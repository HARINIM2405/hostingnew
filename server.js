const express = require('express')
const app=express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
   // console.log("HI");
    //res.status(500).send("ERORR OCCURED");
    //res.status(200).send({error:"error occured"});
    //res.json({ express: 'learning express' });
   // res.render("index",{text:"hello"});
    res.send("hello world");
});

const userRoute =require('./routes/user');
app.use('/user',userRoute);
app.listen(3000)