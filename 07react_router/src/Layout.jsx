import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'

function Layout() {
  return (
    <>
        {/* header and footer reamins same all over just the middle part changes */}
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout