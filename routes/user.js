const express = require('express')
let router =express.Router();

router.get("/",(req,res)=>{
    res.send("user information");
});

router.get("/user/newuser",(req,res)=>{
    res.send("newuser added");
});

router.post("/CreateUser",(req,res)=>{
    res.send("Adding new user ");
});

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.usery);
    res.send("id value: " + req.params.id);
  })
  .put((req, res) => {
    res.send("update this id value: " + req.params.id);
  })
  .delete((req, res) => {
    res.send("delete the id value: " + req.params.id);
  });

const users = [{name:"raja"},{name:"rani"},{name:"sepoy"}];
router.param("id",(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id]
    next();
    
});

module.exports = router;