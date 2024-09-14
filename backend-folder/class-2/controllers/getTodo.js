 const Todo = require ("../models/todo");

 //define router handler

 exports.getTodo = async(req,res)=>{
    try{
          //fetch all todo from database
            const todos = await Todo.find({}); 

            //response
            res.status(200).json (
                {
                  success: true,
                  data:todos,
                  message:'Entire data is fetched'
                }
              );
  
       }
       catch(err){
           console.error  (err);
         
           res.status(500)
           .json({
            success:false,
            data:'internal server error',
            message:err.message,
           })
       }
 }


 exports.getTodoById = async(req,res)=>{
   try{
       //extract todo by id
       const id = req.params.id;
       const todo = await Todo.findById({_id:id})

       //data for given id not found
        if(!todo){
          return res.status(404).json({
          success:false,
          message:"No Data found in given id"
         })
       } 

       //data for given id found
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`
       })
   }
   catch(err){
    console.error  (err);
         
    res.status(500)
    .json({
     success:false,
     data:'internal server error',
     message:err.message,
    })
   }
 }
 