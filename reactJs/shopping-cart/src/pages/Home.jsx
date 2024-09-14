import React, { useEffect, useState } from 'react'
import Spinner from '../component/Spinner';
import Product from '../component/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading , setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    async function fetchProductsData() {

        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
            
        } catch (error) {
            console.log("Error agya jii");
            setPosts([]);
            
        }
       
        setLoading(false);
    }

    useEffect(() =>{
          fetchProductsData(); 
    },[]) 

  return (
    <div>
      {
        loading ? <Spinner/> :
        posts.length > 0 ?
        (
            <div className='grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl  p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
            {
               posts.map( (posts) => (
                <Product key={posts.id} posts={posts}/>
               ))
            }  
            </div>    
        ) : 
        <div className='flex justify-center items-center'>
            <p>
                No Data Found
            </p>
        </div>
      }
    </div>
  )
}

export default Home
