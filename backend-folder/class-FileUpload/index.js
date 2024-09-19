
//app create
const express = require("express");
const app = express();

//PORT find krna h
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware add krna he
app.use(express.json());

const fileupload = require("express-fileupload");

app.use(fileupload(
    {
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }
));

//db se connect krna
const db = require("./config/database");
db.connect();

//upload se connect krna he
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount krna he
const upload = require("./routes/FileUpload");
app.use("/api/v1/upload",upload);

//activate the server
app.listen(PORT , ()=>{
    console.log(`App is started at ${PORT}`);
})
