 const mongoose = require("mongoose");

 require("dotenv").config();

 const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{

    })
    .then(()=>{console.log("Db connected successfully")})
    .catch((err)=>{console.log("Error in the connection"+err)
        process.exit(1);
    });


 }

 module.exports= dbConnect;