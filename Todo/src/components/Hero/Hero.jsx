import React from 'react'
import Todo from "../../assets/todo-illus.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className="flex  items-center justify-center ">
        <div>
        <div>
            <h1 className=' font-bold text-6xl leading-tight selection:bg-amber-200  text-zinc-700'>Organize your work <br />  and life, finally.</h1>
        </div>
        <div>
            <p className='text-2xl leading-9 selection:bg-amber-200  text-gray-500 tracking-normal font-medium'>Become focused, organized, and calm with Todoist. The  <br />world’s  #1  task manager and to-do list app.</p>
            
        </div>
        <div>
            <ul>
            <Link to='/dashboard'><li className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-300  w-fit m-auto mt-3 hover:border-transparent rounded '>Start for free</li></Link>
            </ul>
        </div>
        </div>
        <div>
            <img  src={Todo} />
        </div>
        
        
        </div>
    
    </>
  )
}

export default Hero