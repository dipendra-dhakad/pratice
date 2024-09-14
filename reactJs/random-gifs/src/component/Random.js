import React from 'react'

import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {

//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState('false');


//   async function fetchData() {

//     setLoading(true);
    
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

//      const {data} = await axios.get(url);
//      const imageSource = data.data.images.downsized_large.url;
     
//      setGif(imageSource);
//      setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

 const {gif , loading , fetchData} = useGifs(); 

//   function clickHandler(){
//      fetchData();
//   }

  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className=" mt-[15px] text-2xl uppercase underline font-bold">A Random Gif</h1>
       
       {
        loading ?(<Spinner/>):( <img src={gif} alt='gifs' width="450" />)
       }
      

      <button
        onClick={()=>{fetchData()}}
        className="w-10/12 bg-yellow-300 text-xl py-2 rounded-lg font-bold mb-[20px]"
      >

        Generate

      </button>

    </div>
  );
};

export default Random;