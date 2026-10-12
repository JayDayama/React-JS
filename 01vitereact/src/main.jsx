import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>My React App !!!</h1>
    </div>
  )
}
// this syntax gets parsed into the syntax used as showm below that is done internally by bundler in react hence we use jsx syntax in react i.e : mixture of html and js
// const React_element = {
//     type : 'a',
//     props : {
//         href : 'https://www.google.com/',
//         target : '_blank'
//         // linked webpage in new tab
//     },
//     children : 'Click me to visit Google'
// }
// Vite is not expecting this type of syntax it may be expecting some other syntax hence this will not work in vite but this is how react works internally
// remember this is an object not a function

const anotherElement = (
  <a href="https://www.google.com/" target="_blank">Visit Google</a>
)

const anotherUser = "Yash Dayama"

// Babble inject/transpiles the jsx syntax into the below syntax that is understood by vite and react
const ReactElement = React.createElement(
  // basicaly vite expects this type of syntax for creating a new element in react
  'a',
  {href : 'https://www.google.com/', target : '_blank'},
  'Click me to visit Google',
  // variable injection is at the last
  //evaluated expression hona chahiye hence we can not use if and else statements
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  ReactElement
)

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <App />

//   // ReactElement

//   // anotherElement
//   // React_element

//   // <MyApp />
//   // we can also make a simple function call to MyApp() instead of <MyApp />

//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
// )
