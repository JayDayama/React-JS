import React from 'react'
import {Container,Logo , LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'// for checking in the store
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  
  // harr baar naya button banane se aacha (idhar ek nayi value add kardo nav bar mei ek aur chiz add ho jati hai) :-
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, // active true hai toh display kardo
      // eg : agar user already LogIn hai toh use woh button dikhana hi kyu h
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ? (
                // jo chiz repeat hoti h key udhar hi lagti hai
                <li key={item.name}>
                  <button
                  // navigate kaam karne ke liye use bass ek url de do
                  onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {/*if authStatues true then and only then () this will be displayed */}
            {authStatus && (
              // if authenticated then show the logOut button else why do u need it
              <li>
                <LogoutBtn />
              </li>
            )} 
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header