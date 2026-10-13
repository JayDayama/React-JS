import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  // let counter = 15
  let [counter , setCounter] = useState(15)

  const AddValue = () => {

    // yeh sare calls ek bunch mei jate hai hence ek hi baar UT update hota hai
    // hence counter = 15 + 1 = 16
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // what if someone wants to update like this like 4 times in a row
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)

    // counter = counter + 1 
    // if(counter < 25) setCounter(counter + 1)
    // console.log("Add Value Clicked",counter)
    // UI updation ko react control karta hai
  }

  const decrementVal = () => {
    if(counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={AddValue} > Add Value </button>
      <br />
      <button onClick={decrementVal} >Decrease Value</button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
