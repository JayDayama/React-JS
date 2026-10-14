import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// router allows us to make changes in url without reloading the page that enables in UI changes on the page

// const router = createBrowserRouter([
//   {
//     path: '/',
//     // iske andar nesting ho rhi hai ; element -> what to render
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path: "about",
//         element : <About />
//       },
//       {
//         path: "contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    // Layout mei humara bass header footer constant rakh rhe hai baki changes uske children mei ho rhe hai
    // aur layout mai present outlet ki wajah se hum nesting kar pa rhe hai layout ke andar
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='user/:userid' element = {<User />} />
      <Route
      // we can call a method too or else we can directly fetch the api over here
      loader = {githubInfoLoader}
      path='github'
      element = {<Github />}
      // loader = (() => {

      // })
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  // router provider is a wrapper inside which everything is held together
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
