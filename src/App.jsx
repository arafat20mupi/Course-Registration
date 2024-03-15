import { useEffect, useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'

function App() {
  const [courses , setCourses] = useState([])
    useEffect( ()=>{
        fetch('ragistration.json')
        .then(res => res.json())
        .then( data => setCourses(data))
    },[]);
    const [carts , setCarts]  = useState([])
    const handleCourse = (select) =>{
      const newHandleCourse = [...carts,select];
      setCarts(newHandleCourse);
    }

  return (
    <>
      <h2 className='text-center mt-4 text-4xl font-bold text-black '>Course Registration</h2>
     <div className='flex container mx-auto'>
        <div className='w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              courses.map( course => <Courses handleCourse={handleCourse} course={course} key={course.id}></Courses>)
            }
        </div>
        <div className='w-1/3 p-5 shadow-lg space-y-5'>
          <h2 className=' text-xl font-bold text-primary'>Credit Hour Remaining 7 hr</h2>
          <hr />
          <h3 className='text-xl font-bold text-primary'>Course Name</h3>
          {
            carts.map( (course ,index) => <p key={index} className='text-lg font-medium'>{course.name}</p>)
          }
          <p>Total Credit Hour : 13</p>
          <p>Total Price : 48000 USD</p>
        </div>
     </div>
    </>
  )
}

export default App



// 5 no video 