import { useState } from 'react'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  // if needed we can also set data in our context from here too

  return (
    <UserContextProvider>
      <h1>Jay Dayama Learning React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App