import React from 'react'
import { SiTodoist } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div className='flex-1 flex items-center gap-2'>
            <SiTodoist className='text-3xl text-orange-600 cursor-pointer' />
            <h1 className='text-orange-600 text-3xl font-semibold cursor-pointer font-mono'>todoist</h1>
        </div>
        <div >
            <ul className='flex items-center justify-center gap-10'>
                <Link to="/features"><li className='text-gray-700 font-semibold hover:bg-gray-100 px px-5 py-2 rounded-md cursor-pointer'>Features</li></Link> 
                <Link to="/for-teams"><li  className='text-gray-700 font-semibold hover:bg-gray-100 px px-5 py-2 rounded-md cursor-pointer'>For Teams</li> </Link>
                <Link to="/resources"><li  className='text-gray-700 font-semibold hover:bg-gray-100 px px-5 py-2 rounded-md cursor-pointer'>Resources</li></Link> 
                <Link to="/pricing"><li  className='text-gray-700 font-semibold hover:bg-gray-100 px px-5 py-2 rounded-md cursor-pointer'>Pricing</li></Link>
            </ul>
        </div>
        <div className='text-2xl text-gray-400 px-3 cursor-pointer'>|</div>
        <div >
            <ul className='flex justify-center gap-2 items-center cursor-pointer'>
                <Link to=
                '/login'><li className='text-gray-700 font-semibold hover:bg-gray-100 px px-5 py-2 rounded-md cursor-pointer'>LogIn</li></Link>
                <Link to="/signup"><li className='font-semibold hover:bg-red-550  px-3 py-2 text-white bg-slate-600 rounded-3xl '>SignUp</li></Link>
            </ul>
        </div>
    </>
  )
}

export default Navbar