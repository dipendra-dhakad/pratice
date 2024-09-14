  //import in model
  const   Todo = require("../models/todo");

  //define  route handler

  exports.deleteTodo = async(req,res) =>{
     try{
  
         const {id}  = req.params;

         await Todo.findByIdAndDelete(id);
           
        res.status(200).json({
            success:true,
            message:"Todo deleted"
           })
     }
     catch(err){
        console.error  (err);
         console.log("error agya h" +err);
        res.status(500)
        .json({
         success:false,
         data:'internal server error',
         message:err.message,
        })
     }
  }

