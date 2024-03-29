import { useState,useEffect } from 'react'

import './App.css'
import { Todoprovider } from './context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos,setTodos]=useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [{id:Date.now(), ...todo},...prev])
  }
  

  const update =(id,todo) => {
    setTodos((prev) => prev.map((preveTodo) =>(preveTodo.id===id ? todo :preveTodo)))
  }
  const deleteToDo = (id) =>{
    setTodos((prev) => prev.filter((todo) =>  todo.id !== id))
  };

  const togglecomplet = (id) =>{
    
    setTodos((prev) => 
    prev.map((preveTodo) => 
      preveTodo.id === id ? {...preveTodo,completed:!preveTodo.completed}: preveTodo))
      
  }
  


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0 ) {
      setTodos(todos)
      
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem("todos" ,JSON.stringify(todos))
  },[todos])
  
  return (
    <Todoprovider value={{todos,addTodo,update,deleteToDo,togglecomplet}}>
      <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Sigma manage ToDos</h1>
        <div className="mb-4">
           <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
        {todos.map((todo) => (
  <div key={todo.id} className='w-full'>
    <TodoItem todo={todo} togglecomplet={togglecomplet} />
  </div>
))}
        </div>
    </div>
</div>
    </Todoprovider>
  )
}

export default App
