import React,{useState} from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { IoIosAlarm } from "react-icons/io";
import { LiaInboxSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";

const PopUp = ({setTodoList,todoList,close}) => {
    const [task, setTask] = useState('')
 const [desc, setDesc] = useState('')

    const handleClick = ()=>{
        
        const newTodo = {task,desc};
        setTodoList([...todoList,newTodo])
    //  setTodoList([...todoList,newTodo]);
      setTask('');
      setDesc('');
     }
  return (
    <>
    <div className="w-[40vw] bg-white h-[36vh] p-3 pt-3 pb-0 rounded-lg ml-24 mb-[30vh] transition-transform duration-500 ease-linear shadow-[1px_1px_30px_0px_#888888]">
            <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder='Enter your task' className='w-[100%] focus:outline-none text-xl font-medium tracking-wide text-zinc-500'/>
            <input type="text" onChange={(e)=>setDesc(e.target.value)} placeholder='Description' className='mt-3 w-[100%] focus:outline-none text-xl font-medium tracking-wide text-zinc-500'/>
            <div className='w-[80%] mt-4 mb-5 '>
                <ul className='flex justify-between'>
                    <li className='text-base  px-2 py-1   border-2 cursor-pointer border-zinc-400 flex gap-3 justify-center items-center rounded-md'>
                        <FaCalendarAlt className='fill-green-600 '/>
                        <h1>Due Date</h1>
                        <h1 className='text-[25px] text-zinc-400 cursor-pointer '>&times;</h1>
                    </li>
                    <li className='text-base cursor-pointer px-2  border-2 border-zinc-400 flex gap-3 justify-center items-center rounded-md'>
                        <FaFlag className='fill-green-600 cursor-pointer'/>
                        <h1>Priority</h1>
                        </li>
                        <li className='text-base cursor-pointer px-2  border-2 border-zinc-400 flex gap-3 justify-center items-center rounded-lg'>
                            <IoIosAlarm className='fill-green-600 cursor-pointer' />
                        <h1>Remiander</h1>
                        </li>
                </ul>
            </div>
            <div className='border-2 border-zinc-200 w-[100%]'></div>
            <div className='flex justify-between mt-7'>
                <div className='flex justify-center gap-1 items-center border-2 border-zinc-400 px-3 py-1 rounded-lg'>
                    <LiaInboxSolid/>
                    <h1>Inbox</h1>
                    <FaCaretDown/>
                </div>
                <div className='flex gap-2'>
                    <button onClick={close} type='button' className='border-2 boreder-zinc-300 py-1 px-3 rounded-md font-semibold' >Cancel</button>
                    <button onClick={handleClick} type='button' className='border-2 boreder-zinc-300 py-1 px-3 rounded-md font-semibold'>Add Task</button>
                </div>
            </div>
      </div>
    
    </>
  )
}

export default PopUp