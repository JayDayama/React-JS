import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components'
import {Outlet} from 'react-router-dom'


function App() {

  // console.log(import.meta.env.VITE_APPWRITE_URL)
  // console.log(process.env.REACT_APP_APPWRITE_URL); -> for create react app

  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect (() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))

    // .finally always runs
  } , [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400 text-center">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
