const mongoose = require("mongoose");
const nodemailer = require('nodemailer');


const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }

}); 

//post middleware
  fileSchema.post("save",async function(doc){
    try {
        console.log("Doc",doc)

        //transporter

        let transporter = nodemailer.createTransport({
            host :process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        });
         
       //send mail
       let info = await transporter.sendMail({
        from:`dd-dip`,
        to: doc.email,
        subject:"New file Uploaded on cloudinary",
        html:`<h2>Hello jee</h2> <p>File Uploaded  View here: <a href="${doc.imageUrl} ">${doc.imageUrl}</a> </p>`,
       })
       console.log("info->", info); 
    } catch (error) {
        console.log(error);
    }
  })


const File = mongoose.model("File",fileSchema);
module.exports = File;