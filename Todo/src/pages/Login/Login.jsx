import React from 'react'
import { SiTodoist } from 'react-icons/si'
import { Link } from 'react-router-dom'
import Todomg from '../../assets/Todomg.png'
import Google from '../../assets/Google.png'
import Facebook from '../../assets/Facebook.png'
import Apple from '../../assets/Apple.png'


const Login = () => {
  return (
    <>
    <div className='w-[80vw] m-auto lg:w-[80%] lg:flex lg:flex-row lg:gap-14'>
    <div>
        <SiTodoist className='text-4xl mt-4 text-orange-600 cursor-pointer' />
    <div className='mt-[4vh]'>
        <h1 className='text-3xl font-bold'>Log In</h1>


        <div className='flex flex-col gap-2 mt-12 justify-center items-center w-[100%] '>
           {[{
            name:'Google',
            icon:Google
        },{
            name:'Facebook',
            icon:Facebook
        },{
            name:'Apple',
            icon:Apple
        }].map((brand,i)=>{
            return(
                <div key={i} className='flex
                justify-center items-center px-2 py-3 rounded-lg w-[100%] font-bold text-xl text-zinc-900 border-2 border-zinc-100 hover:bg-zinc-100 gap-2'>
                    <div><img className='w-[25px]' src={brand.icon} alt="" /></div>
                    <div><button   type='button'>Continue with {brand.name}</button></div>
                </div>
            )
           })} 
        </div>
        <div className='border-t-2 border-zinc-300 w-[100%] mt-5 relative '>
            <input className='  w-[100%] mt-3 text-lg pr-3 pl-2 pt-8 pb-2 rounded-lg border-2 border-zinc-200  ' type="email" name="email" id="email"  placeholder='Enter your email...'/>
            <h1 className='absolute font-semibold text-base top-4 left-2'>Email</h1>
            <input className='  w-[100%] mt-3 text-lg pr-3 pl-2 pt-8 pb-2 rounded-lg border-2 border-zinc-200  ' type="password" name="password" id="password"  placeholder='Enter your password...'/>
            <h1 className='absolute font-semibold text-base top-24 left-2'>Password</h1>
        </div>
        <div className='mt-4'>
            <button className='w-[100%] border-2 border-zinc-200 p-3 rounded-xl text-white bg-red-500 text-xl font-bold' type='button'>Log in</button>
        </div>
        <div className='text-sm'>
            <Link><h1 className='mt-2 underline text-zinc-600'>Forgot your password?</h1></Link>
            <Link><h1 className='mt-2  text-zinc-600'>By continuing with Google, Apple, or Email, you agree to Todoist’s <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy</span>.</h1></Link>
        </div>
        <div className='flex justify-center items-center mb-5 mt-5 text-sm text-zinc-600'>
        <h1>Don’t have an account? <span className='underline'>Sign up</span></h1>
        </div>
    </div>
    </div>
    <div className='flex justify-center items-center'>
        <img className='w-[30vw] ' src={Todomg} alt="" />
    </div>
    </div>
    </>
  )
}

export default Login