import { useState } from "react"

function App() {
  const [color, setColor] = useState("#111827")

  return (
    <div className="w-full h-screen duration-300"style = {{backgroundColor : color}}
    >
      <h1 className="flex flex-wrap justify-center py-50 text-xl text-white top-24">Background Color Changer</h1>
      {/* flex -> arranges all items in a row */}
      {/* flex-wrap -> changes row of elements to multiple lines when size of page shrinks or so */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white gap-3 shadow-xl px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "red"}}>
            Red
          </button>
          <button onClick={() => setColor("orange")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "orange"}}>
            Orange
          </button>
          <button onClick={() => setColor("green")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "green"}}>
            Green
          </button>
          <button onClick={() => setColor("purple")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "purple"}}>
            Purple
          </button>
          <button onClick={() => setColor("pink")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "pink"}}>
            Pink
          </button>
          <button onClick={() => setColor("blue")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "blue"}}>
            Blue
          </button>
          <button onClick={() => setColor("cyan")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "cyan"}}>
            Cyan
          </button>
          <button onClick={() => setColor("magenta")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "magenta"}}>
            Magenta
          </button>
          <button onClick={() => setColor("black")}
          className="outline-none px-3 py-1 rounded-full text-white"
          style ={{backgroundColor : "black"}}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
