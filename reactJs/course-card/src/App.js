import React , {useEffect }  from "react";
import {useState} from 'react';

import './App.css';
import  Navbar  from "./components/Navbar";
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {

  const [courses, setCourses] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [category, setCategory] = useState (filterData[0].title);

  // useEffect(() => {
  //   const fetchData = async ()=>{
  //     try {
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();
  //       //save data into a variable
  //       setCourses(output.data);

  //     } catch (error) {
  //       toast.error("something went wrong")
  //     }
  //   }
  // }, [])

  async function fetchData (){

    setLoading(true);
    try {
        let response = await fetch(apiUrl);
        let output = await response.json();

        //output =>
          setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat he")
    }
    setLoading(false);
  }

  useEffect(()=>{
       fetchData();
  },[]);
  

  return (
    <div className="min-h-screen flex flex-col bg-slate-600">
      <div> 
        <Navbar/>
      </div>

      <div className="bg-slate-600">
        <div>
         <Filter
          filterData = {filterData}
          category = {category}
          setCategory = {setCategory}
         />
        </div>

       <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
           {
              loading ? (<Spinner/>) :(<Cards 
               courses = {courses} 
               category = {category}
              />)
        }
        
       </div>

      </div>
     
      
       
    </div>
  );
}

export default App;
