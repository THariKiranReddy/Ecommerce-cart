import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='flex shadow-md py-4 px-6 flex-wrap items-center'>
          <h1 className='font-bold text-2xl ml-5 tracking-wide flex-shrink-0'>THK</h1>
        {/* <div className='flex w-60 justify-around ml-[950px] space-x-8 text-lg font-medium '> */}
         <div className="flex w-full sm:w-auto justify-around sm:justify-start ml-0 sm:ml-auto space-x-4 sm:space-x-8 text-lg font-medium flex-wrap">
            <NavLink to='/signup' className={({isActive}) => isActive ? "text-blue-500" : "text-grey-500 " }>SignUp</NavLink>
            <NavLink to='/Login' className={({isActive}) => isActive ? "text-blue-500" : "text-grey-500 " }>Login</NavLink>
            <NavLink to = "/" className={({isActive}) => isActive ? "text-blue-500" : "text-grey-500 " }>HomePage</NavLink>
            <NavLink to = "/userprofile" className={({isActive}) => isActive ? "text-blue-500" : "text-grey-500 "}>Profile</NavLink>
            <NavLink to = '/logout' className={({isActive}) => isActive ? "text-blue-500" : "text-grey-500 "}>Logout</NavLink>
        </div>
        </div>
    </nav>
  )
}

export default Navbar

// shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] p-4