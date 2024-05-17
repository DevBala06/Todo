import React,{useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsLayoutSidebar } from "react-icons/bs";
import Popup from'reactjs-popup';
import PopUp from '../PopUpTask/PopUpTask.jsx';

const Sidebar = ({sidebar,setSidebar ,setTodoList,todoList}) => {
    
  return (
    <>
    <div className={`w-[20vw] h-screen bg-slate-200 transition-all ease-linear duration-[200ms] ${sidebar===false?'-ml-80':''}`}>
        <div >
        <div className='flex justify-between items-center p-5 '>
            <div className='flex justify-center items-center '>
                 <h1 className='text-base font-semibold' > <span className='px-[.7vw] py-[1vh] mr-2 text-xs  rounded-full bg-red-500 text-white'>G</span> Guest </h1>
            <IoIosArrowDown className='fill-slate-600  ml-2' />
            </div>
            <div className='flex gap-5 justify-center items-center '>
                <div>
                    <IoIosNotificationsOutline className='h-[25px] w-[25px] fill-zinc-500'/>
                </div>
                <div>
                    <BsLayoutSidebar onClick={()=>setSidebar(!sidebar)} className={`h-[20px] w-[20px] fill-zinc-700 cursor-pointer transition-all ease-linear duration-[200ms] ${!sidebar?"mb-20 ml-52":''}`}/>
                </div>
            </div>
        </div>
        <div className='p-2 mt-4 cursor-pointer hover:bg-zinc-200 w-[95%] rounded-md m-auto active:w-[90%] transition-all'>
                    
        <Popup
    trigger={
      <h1 className="text-base font-semibold " >
        <span className="px-[.5vw] pb-[.3vh] mr-2 text-xl font-semibold rounded-full bg-red-500 text-white ">+</span> New Task
      </h1>
    }
    modal
    position="top center"
  >{close=>(
    
      <PopUp close={close} setTodoList={setTodoList} todoList={todoList}/>
  )}
  </Popup>
                   
            
            </div>
        </div>
    </div>
    
        <div>
        </div>
    
    </>
  )
}

export default Sidebar