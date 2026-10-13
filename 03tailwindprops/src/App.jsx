import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobject = {
    name : "Jay",
    age : 22,
    city : "Mumbai"
  }

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "Jay Dayama" btnText = "Click me"/>
      {/* <Card name = "Jay Dayama" myobj = {myobject} /> */}
      {/* object ke aandar baki chize aati hai isliye {myobject} */}
      {/* <Card channel = "Jay Dayama" myArr = {name : "Jay"} /> */}
      {/* yeh name hi ek prop hai */}
      <Card username = "Yash Dayama" />
    </>
  )
}

export default App
