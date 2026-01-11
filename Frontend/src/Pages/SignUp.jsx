import React, { useContext, useState } from 'react'
import { AppContext } from '../ContextProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
  
  const navigate = useNavigate();
  const [redirect,setRedirect] = useState(false);
  const {Login} = useContext(AppContext);
  const [details,setDetails] = useState({
    email:"",
    password:"",
    name:""
  });

  // Your signup function that accepts email and password
  async function SignUp(email, password, name) {
    try{
        // const res = await fetch('http://localhost:5000/register', {
        const res = await fetch('https://ecommerce-cart-vb5e.onrender.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password ,name}),
    });
     const data = await res.json();
    console.log(data);

    if (res.ok) { // Only check if the response is successful
  if (data.token) {
    localStorage.setItem('token', data.token); 
    try {
      const decoded = JSON.parse(atob(data.token.split(".")[1]));
      localStorage.setItem("userId", decoded.userId);
    } catch(e) {
      console.error("Token decoding failed", e);
    }
  }
    return true;
    } else {
    alert(data.message || 'Signup failed');
    return false;
}  
  // If no token, it's still a success!
  alert("Registration Successful! Please Login.");
  return "REDIRECT_TO_LOGIN"; 
} else {
  // alert(data.message || 'Registration failed');
  return false;
}
    catch(error){
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await SignUp(details.email,details.password,details.name);
     if(success){
      Login();
   setRedirect(true);
    console.log("clicked");
    navigate('/products');
  }
  else{
    console.log("SignUp Failed try again");
  }

  }
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setDetails({...details,[name]:value});
  }
  return (
    <div className='mx-auto w-96 h-80 mt-10 bg-slate-300 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] rounded-xl hover:cursor-pointer transition duration-300 hover:bg-slate-200'>
       <h1 className='text-3xl text-black text-center p-4 '><b>SignUp</b></h1>
            <form onSubmit={handleSubmit} >
                <div className='mt-10 ml-7 '>
                   <input type="text" placeholder='Enter Username' value={details.name} name="name" onChange={handleChange} className='h-8 w-80 rounded-md p-2 focus:outline focus:outline-gray-500'/><br></br>
        <input type="text" placeholder="Enter Email" value={details.email} name="email" onChange={handleChange} className='h-8 mt-2 w-80 rounded-md p-2 focus:outline focus:outline-gray-500'/><br></br>
        <input type="password" placeholder='Enter Password' value={details.password} name="password" onChange={handleChange} className='h-8 mt-2 w-80 rounded-md p-2 focus:outline focus:outline-gray-500'/><br></br>
        <button type="submit" className='mt-5 bg-slate-800 text-white transition duration-300 w-16 p-2 rounded-md block mx-auto hover:bg-blue-400'>SignUp</button>
                </div>
      </form>
        </div>
  )
}

export default SignUp
