import { use, useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'
import { TodoProvider } from './context'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {
    // setTodos(todo) -> this will overwrite the old todo we don't want that 
    // (prev -> old array) but prev is also array(of obj) destructure it ...prev
    // jitne todos the uske pehele yaa baadme khi bhi add kar skte hai naya todo

    // id ko chod ke todo se value lelo
    setTodos((prev) => [{id : Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo) => {
    // prev -> old array of todos
    // prevTodo -> individual todo inside which we can search for id
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    // i dont need the id corresponding todo but i need the rest make a new array
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
    // values that do not match will come to use
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo,completed : !prevtodo.completed}:prevtodo ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    // adding a new todo
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              // each todo should have unique id. i.e : key
              <div key={todo.id} className='w-full'>
                {/* <TodoItem> needs a component prop i.e todo (kya add kar rhe hai) */}
                <TodoItem todo = {todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
