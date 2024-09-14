import React, {  useState } from 'react'
import useGifs from '../hooks/useGifs';
import Spinner from './Spinner';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {

  const [tag , setTag] = useState('car');
//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState('false');


//   async function fetchData() {

//     setLoading(true);
    
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     // const url = 'https://api.giphy.com/v1/gifs/random?api_key=5oF13wgTZUGRLdUXxmCC4v0HZKTLt1dp&tag=&rating=g';

//      const {data} = await axios.get(url);
//      const imageSource = data.data.images.downsized_large.url;
     
//      setGif(imageSource);
//      setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function clickHandler(){
//      fetchData();
//   }

//   function changeHandler(event){
//     setTag(event.target.value);
//   }

const {gif , loading , fetchData} = useGifs(tag); 

  return (
    <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className=" mt-[15px] text-2xl uppercase underline font-bold">Random {tag} Gif</h1>
       
       {
        loading ?(<Spinner/>):( <img src={gif} alt='gifs' width="450" />)
       }
      

       <input
         className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
         onChange={(event) =>{setTag(event.target.value)}}
         value={tag}
       />

      <button
        onClick={()=>{fetchData()}}
        className="w-10/12 bg-yellow-300 text-xl py-2 rounded-lg font-bold mb-[20px]"
      >

        Generate

      </button>

    </div>
  );
};

export default Tag;