import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-orange-400 mt-1'>Ohhh Shit...!</h1>
        <h1 className='text-3xl font-bold text-gray-800 mt-1'>404 Page Not Found</h1>
        <p className=' text-gray-400 font-semibold mt-1'>I think you are trying to go somewhere which is not exist!</p>
        <Link to={'/'}>
            <button className='px-5 py-2 rounded-md bg-orange-400 text-white font-semibold mt-4'>Go to Home</button>
        </Link>
    </div>
  )
}

export default ErrorPage