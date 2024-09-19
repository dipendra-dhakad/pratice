 const File = require("../models/File");
const cloudinary = require("cloudinary");
 //localfileupload -> handler function

 exports.localFileUpload = async(req,res) =>{
    try {
        //fetch filefrom request 
        const file = req.files.file;
        console.log("File aagye jee ->", file);

        //create path where file tobe stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH->" ,path);
        
        //add path to the move function
        file.mv (path, (err)=>{
            console.log(err);
        });

        //create a successful response
        res.json({
            success:true,
            message:"Local File Uploaded Successfully",
        });
    } catch (error) {
        console.log("Not able to upload the fiile on server");
         console.log(error);
    }
 }


 function isFileTypeSupported(type,supportedTypes){
     return supportedTypes.includes(type);
 }

async function uploadFileToCloudinary(file,folder,quality){
    const options = {folder};
    console.log("temp file path" ,file.tempFilePath);

      if (quality) {
          options.quality = quality;
      }

    options.resource_type ="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
} 

 //image upload ka handler

 exports.imageUpload = async (req,res) =>{
    try {
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("file type->", fileType)

        if (!isFileTypeSupported(fileType,supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:"File format not supported",
            })
        }

        //file format supported he
        console.log("uploading to imageUpload");
        const response = await uploadFileToCloudinary(file,"imageUpload",30);
          console.log(response);

        // db  me entry save krna he
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,

        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"image successfully upload",
        })

    } catch (error) {

        console.log(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
 }


 //video upload ka handler
 exports.videoUpload = async (req,res)=>{
    try {
         //data fetch
         const {name,tags,email} = req.body;
         console.log(name,tags,email);

         const file = req.files.videoFile;

           //validation
        const supportedTypes = ["mp4","mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("file type->", fileType)

        //todo : add a upper limit og 5mb for video
        if (!isFileTypeSupported(fileType,supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:"File format not supported",
            })
        }

          //file format supported he
        console.log("uploading to videoUpload");
        const response = await uploadFileToCloudinary(file,"imageUpload");
          console.log(response);

        // db  me entry save krna he
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,

        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"video successfully upload",
        })


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"something went wrong",
        });
    }
 }


 //image sizeReducer handler
exports.imageSizeReducer = async (req,res) =>{

    try {
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("file type->", fileType)

        if (!isFileTypeSupported(fileType,supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:"File format not supported",
            })
        }

        //file format supported he
        console.log("uploading to imageUpload");
        const response = await uploadFileToCloudinary(file,"imageUpload");
          console.log(response);

        // db  me entry save krna he
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,

        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"image successfully upload",
        })

    } catch (error) {

        console.log(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }

}
