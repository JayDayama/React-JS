import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    // we can wrap our things here too but i have done it in main.jsx
    <>
      <h1 className="text-center text-xl">Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
