import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { IoIosAlarm } from "react-icons/io";
import { LiaInboxSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { TbCalendarDue } from "react-icons/tb";

const TodoItem = ({ task, desc , setTodoList,todoList,id }) => {
    const [hover, setHover] = useState(false);
    const [newHover, setNewHover] = useState(false);


    const handleDelete = (e)=>{
        
        const ele = e.target.id;
        
        const filtered = todoList[e.target.id]
        
        const newTdo = todoList.filter((item)=>item!==filtered)
        
        setTodoList(newTdo)

    }
    
    return (
      <li  onMouseEnter={() => setNewHover(true)} 
          onMouseLeave={() => setNewHover(false)} className=' relative w-[60vw] text-lg leading-snug font-medium ml-24 rounded-md flex pb-2 mb-2 items-center border-b-2 border-zinc-700'>
        <div 
          onClick={() => setHover(!hover)} 
          
        >
          {hover === false ? (
            <MdRadioButtonUnchecked className='w-[25px] h-[25px] mb-3' />
          ) : (
            <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px] mb-3' />
          )}
        </div>
        <div className={`ml-3 flex flex-col    ${hover===true?"line-through":""}`}>
          <h1  className={`text-zinc-600 `}
>{task}</h1>
          <h1 className='text-sm tracking-wider font-normal text-zinc-500'>{desc}</h1>
        {newHover===true?<div className='absolute flex  text-2xl right-5 font-bold  gap-2  cursor-pointer'><RiDeleteBin6Line className='hover:animate-pulse text-zinc-600 font-light' id={id}  onClick={handleDelete}/>
            <RiEdit2Line className='hover:animate-pulse text2xl text-zinc-600 font-light  '/>
            <TbCalendarDue className='hover:animate-pulse text-zinc-600 font-light text2xl'/>
        </div>:''}
        </div>
      </li>
    );
  };
  

const Main = ({todoList,setTodoList}) => {
 const [task, setTask] = useState('')
 const [desc, setDesc] = useState('')
 const [newTask, setNewTask] = useState(false)

 const handleClick = ()=>{
    const newTodo = {task,desc};
 setTodoList([...todoList,newTodo]);
  setTask('');
  setDesc('');
 }
  return (
    < >
        <div className='w-[100%]'>
            <div className='  ml-7 '>
                <h1 className=' m-auto w-[100%] ml-20 p-2 mt-20 text-3xl text-zinc-700 font-bold'>Today</h1>
                <ul>
                  {todoList.map((list,i)=>{
                    return (
                        <TodoItem key={i} id={i} task={list.task} desc={list.desc} todoList={todoList} setTodoList={setTodoList}/>
                    
                    )
                  })}
        
                    {newTask===false ? <li className=' w-[60vw] ml-24 mt-5  h-[32vh]' onClick={()=>{setNewTask(true)}}><h1 className="cursor-pointer text-base font-semibold " >
        <span className="px-[.5vw] pb-[.3vh] mr-2 text-xl font-semibold rounded-full bg-red-500 text-white ">+</span> New Task
      </h1></li>:<li className=''>
                    <div className="w-[60vw]  h-[32vh] border-2 border-zinc-300 p-3 pt-3 pb-0 rounded-lg ml-24 mb-[30vh] transition-transform duration-500 ease-linear">
            <input type="text" value={task} onChange={(e)=>{setTask(e.target.value);
                console.log(task)
            }} placeholder='Enter your task' className='w-[100%] focus:outline-none text-xl font-medium tracking-wide text-zinc-500'/>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder='Description' className='mt-1 w-[100%] focus:outline-none text-xl font-medium tracking-wide text-zinc-500'/>
            <div className='w-[80%] mt-2 mb-5 '>
                <ul className='flex gap-6'>
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
            <div className='flex justify-between mt-4'>
                <div className='flex justify-center gap-1 items-center border-2 border-zinc-400 px-3 py-1 rounded-lg'>
                    <LiaInboxSolid/>
                    <h1>Inbox</h1>
                    <FaCaretDown/>
                </div>
                <div className='flex gap-2'>
                    <button onClick={()=>{
                        setNewTask(false)
                    }} type='button' className='border-2  cursor-pointer boreder-zinc-300 py-1 px-3 rounded-md font-semibold'>Cancel</button>
                    <button type='button' onClick={handleClick} className='border-2 boreder-zinc-300 py-1 px-3 rounded-md font-semibold'>Add Task</button>
                </div>
            </div>
      </div>
                    </li>}
                </ul>
            </div>
        </div>
    </>
  )
}

export default Main