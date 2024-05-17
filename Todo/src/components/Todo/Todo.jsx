import { createContext, useContext } from "react";


const TodoContext = createContext();

 export const useTodoContext = ()=>{

  useContext(TodoContext)};

  export const TodoProvider = ({children,value})=>{
        
return (
  <TodoContext.Provider value={value}>
    {children}
  </TodoContext.Provider>
)
        
  }