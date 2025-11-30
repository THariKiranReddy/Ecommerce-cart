import React, { useEffect, useState } from 'react'

const ProfilePage =() => {
     const [profile, setProfile] = useState([]);
  const fetching = async() =>{
    const token = localStorage.getItem("token");
    try{
      // const res = await fetch('http://localhost:5000/userprofile',{
      const res = await fetch('https://ecommerce-cart-vb5e.onrender.com/userprofile',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,  
      },
    });
      const data = await res.json();
      console.log("profile");
      console.log(data);
      setProfile(data);
    }
  catch(error){
 console.log(error);
  }
}
 
useEffect(()=>{
fetching();
},[]);

  return ( 
    <div className='mt-10 ml-16  mx-auto px-4'>
      <h1 className='text-3xl text-center'><b>Profile Page</b></h1>
      <div>
        {profile &&
          <div className='border-2 w-96 h-96 max-w-md mx-auto mt-10 hover:cursor-pointer transition duration-300 hover:bg-slate-200 rounded-xl'>
            <img src="/OIP.webp" alt="image.jpg" className='border-2 border-black w-52 h-52 rounded-full object-cover mx-auto mt-6'/>
             <div className='ml-10 mt-10'>
                <h2 className='text-2xl'>Name: <b>{profile.name}</b></h2>
          <p className='mt-2'>Email:  <b>{profile.email}</b></p>
             </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ProfilePage