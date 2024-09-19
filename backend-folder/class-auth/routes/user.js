const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/Auth"); // Use 'signUp' here
const {auth , isStudent ,isAdmin} = require("../middlewares/auth");



router.post("/login",login);
router.post("/signup", signup);

//single route for testing single middleware
router.get("/test" ,auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Test",
    });
})



//Protected routes

router.get("/student" ,auth,isStudent ,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for students",
    });
})


router.get("/admin" ,auth,isAdmin ,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Admin",
    });
})

module.exports = router;