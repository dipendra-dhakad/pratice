import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const {cart} = useSelector((state) => state);
  return (
    <div className=''>
        <nav className='flex justify-between items-center h-20 mx-w-6xl mx-auto'>
         
         <NavLink to="/">

           <div className='ml-36'>
              <img src="https://static.vecteezy.com/system/resources/previews/007/747/833/non_2x/letter-d-paper-bag-logo-template-free-vector.jpg" alt="logo" className='h-14' />
           </div>

         </NavLink>
         
          
          <div className='flex items-center font-medium text-slate-100 mr-5 space-x-10 '>

            <NavLink to="/">
               <p>Home</p>
            </NavLink>
          
            <NavLink to="/cart">
                <div className='relative'>
                 <FaShoppingCart  className='text-2xl'/>
                 {
                    cart.length > 0 &&
                    <span className='absolute -top-1  -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
                        {cart.length}
                        </span>
                 }
                
                </div>
            </NavLink>
            
           </div>
        

        </nav>
    </div>
  )
}

export default Navbar
