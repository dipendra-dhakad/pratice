//step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open a folder using vscode
//step5:  npm i express
//step6: create a server.js


const express = require ('express');
 const app = express();

 const bodyParser = require("body-parser");
 app.use(bodyParser.json());

 app.listen(4000, ()=>{
     console.log("Server Started at port no. 4000");
     
 })

 app.get('/', (request, response)=>{
    response.send("hello Jee , kaise ho saree");
 })

 app.post ('/api/cars' , (request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted Successfully");
     
 })


 const mongoose = require ('mongoose');

//  mongoose.connect('mongodb://localhost:27017/myDatabase',{
//    // useNewUrlParser:true,
//    // useUnifiedTopology:true
//  })

//  .then(()=>{console.log("Connection Successfully")})
//  .catch((err)=>{console.log("Received an error",err)})  

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((err) => {
    console.log("Received an error", err);
  });
