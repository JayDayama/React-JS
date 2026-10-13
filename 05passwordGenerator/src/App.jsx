import { useState , useCallback , useEffect , useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook : used to take refrence of something
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++){
      const charind = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(charind)
    }

    setPassword(pass)
  } , 
  [length, numberAllowed, charAllowed, setPassword])
  // Dependencies mein se koi bhi change hua toh mera call back naya refrence matlab naya function ka refrence(location) mil jayega matlab mera function cache mei update ho jayegaa baaki time mera function memory mei pada rehta hai ki kuch change nhi hai do nothing for now
  // we can also remove setPassword it is just for optimization purposes

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,8)
    // window next.js mei available nhi hoti hai udhar humare pass server hota hai
    window.navigator.clipboard.writeText(password)
  },[password])

  // we can not have access to when to render our password generator it is dependent on many other factors and is done by react itself
  // passwordGenerator()

  // useEffect(() => {}, []) callback/setup , dependencies
  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])
  // idhar agar kuch bhi change hota hai toh mera function run kardo

  return (
    <>
      <div className="text-center text-xl w-full max-w-md mx-auto rounded-xl shadow-md px-4 py-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-center text-white my-2">Password Generator</h1>
        <div className="flex shadow-md rounded-xl overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="w-full outline-none px-3 py-2 text-gray-800 bg-white"
          placeholder='Password'
          readOnly
          ref = {passwordRef}
          />
          <button 
          onClick={copyPasswordtoClipboard}
          className="outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            // e jo hai event hai jisme target value hai whi toh humari nayi length hai
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            // id = "numberInput"
            onChange={() => {
              // event propogate karne the toh call back fire kiya jisme prev value ka access milta hai toh purani value update ho ja rhi hai
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
