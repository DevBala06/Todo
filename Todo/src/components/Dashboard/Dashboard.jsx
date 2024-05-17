import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Main from '../Main/Main.jsx'
import { TodoProvider } from '../Todo/Todo.jsx'





const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true)
  const [todoList, setTodoList] = useState([{
    task:"To plan this day",
    desc:"Keep smiling"
  }])

  return (
    <>
    <TodoProvider value={todoList}>
    <div className='flex'>
        <div>
        <Sidebar setTodoList={setTodoList} todoList={todoList} sidebar={sidebar} setSidebar={setSidebar}/>
        </div>
        <div className={`${sidebar===true?"w-[80vw]":"w-[90vw]"}  m-auto h-screen`} >
          <Main todoList={todoList} setTodoList={setTodoList}/>
        </div>
    </div>
    </TodoProvider>
    
    </>
  )
}

export default Dashboard