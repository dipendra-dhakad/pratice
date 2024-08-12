import React, {useState} from 'react'
import  Card  from './Card';


//returns you a list of all courses received from the api response
const Cards = (props) => {
     let courses = props.courses;
     let category = props.category;
    const  [likedCourses , setLikedCourses] = useState([]);

    function getCourses (){

        // if (!courses) {
        //     return allCourses; // Return an empty array if courses is undefined or null
        // }
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach( (courseCategory) =>{
                courseCategory.forEach((courseData) =>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        } else {
            //main sirf specific category ka data array kruga
             return courses[category] ;
        }
       
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            
           getCourses().map( (course) => {
            return <Card  key={course.id}
            course ={course}
            likedCourses = {likedCourses}
            setLikedCourses = {setLikedCourses}
           />
                })
               
        }
    
    </div>
  )
}

export default Cards
