import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
     const error = useRouteError();
      console.log(error);
  return (
    <div className='mx-auto w-[500px] mt-40 shadow-xl p-9 rounded-md bg-slate-100 hover:-translate-y-2 hover:scale-110 transition duration-300 ease-in-out delay-150'>
      <h1 className='font-extrabold text-9xl text-center'>404</h1>
      <h2 className='font-extrabold text-5xl text-center'>Page Not Found</h2>
      <p className='text-center mt-5'>The page you are requested is not found.<br></br> please got back to home page <Link to='/' className='underline text-blue-500'>Home</Link></p>
    </div>
  )
}

export default Error