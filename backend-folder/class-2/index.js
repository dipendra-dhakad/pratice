const express = require ("express");
const app = express();


//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TOdo API
const todoRoutes =  require("./routes/todos");

//mount the todo ASPI routes 
app.use(" ",todoRoutes);




app.listen(PORT,()=>{ 
    console.log(`App is started at ${PORT}`)
})

//connect to the database
const dbConnect =  require("./config/database");
dbConnect();

//default route 

app.get("/",(req,res)=>{
    res.send('<h1>This is HomePage baby</h1>')
})