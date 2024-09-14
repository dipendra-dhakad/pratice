import React  from 'react';
import {useState} from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEyeInvisible ,  AiOutlineEye} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
     
    const navigate = useNavigate();

     const [formData , setFormData] = useState({
            email:"" , password:""
         });

     const [showPassword, setShowPassword] = useState(false);

    

     function changeHandler (event){

         setFormData((prevData)=>(
            {
               ...prevData,
            [event.target.name] : event.target.value
            }
         ) )
     }

     
    function submitHandler (event){
        event.preventDefault();
        // console.log("setIsLoggedIn:", setIsLoggedIn);
        setIsLoggedIn(true);
        toast.success("logged in");
        navigate('/dashboard');

    
    }

  return (
    <form onSubmit={submitHandler}
     className="flex flex-col w-full gap-y-4 mt-6"
    >
        <label className="w-full">
            <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
                Email Address
                 <sup className="text-pink-200">*</sup>
            </p>
            <input
               required type='email' 
               value={formData.email}
               onChange={changeHandler}
               placeholder='Enter email id'
               name='email'
                className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
            />
        </label>

        <label className="w-full relative">
            <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
                PassWord
                 <sup className="text-pink-200">*</sup>
            </p>
            <input
               required type= {showPassword  ?("text"):("password")}
                value={formData.password}
               onChange={changeHandler}
               placeholder='Password'
               name='password'
                className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
            />

            {/* <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (< AiOutlineEye/>)}
            </span> */}

                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>

            <Link to='#'>
              <p  className="text-xs mt-1 text-blue-600 max-w-max ml-auto"> 
                Forgot PassWord  
              </p>
            </Link>

        </label>
        
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-slate-900">
            Sign in 
        </button>
    </form>
  )
}

export default LoginForm
