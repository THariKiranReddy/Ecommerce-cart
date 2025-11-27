import React, { useEffect, useState } from 'react'
import ImageSlider from './Imageslider';
import { Link } from 'react-router-dom';

const Home = () => {
    const [index,setIndex] = useState(0);
    const Images = [
       "clothing-brands-nine-big-world-45314261.jpg","clothing-brands-nine-big-world-45314262.jpg"
    ]
    useEffect(()=>{
        const roll = setInterval(()=>{
         setIndex(prev=>(prev===0 ? 1 : 0));
    },2000);
    return () => clearInterval(roll);
    },[]);


  return (
    <div>
        {/* <div className='flex justify-between m-10'> */}
        <div className="flex flex-col md:flex-row justify-between m-10 items-center md:items-start">
            {/* <div> */}
            <div className="mb-10 md:mb-0 md:w-1/2">
                {/* <div className='font-bold text-5xl leading-tight tracking-wide'> */}
                 <div className="font-bold text-4xl md:text-5xl leading-tight tracking-wide">
          <h1>Tellapuri’s – <br></br>Quality You Trust, Prices You Love</h1>
          <h2>Premium Collections. <br></br>Pocket-Friendly Prices.</h2>
        </div>
        <div className='bg-slate-700 text-white w-48 px-6 py-3 text-center rounded-md hover:bg-slate-400 hover:text-black transition duration-300 text-lg mt-8 shadow-lg hover:cursor-pointer '>
            <Link to='/products'><p><b>Go to Products Page</b></p></Link> 
        </div>
        <div>
            <p className='text-xs mt-3 max-w-xs'><b>"If you already have an account, <Link to='/login' className='text-blue-600 font-semibold underline'>log in.</Link> If you're new, <Link to='/signup' className='text-blue-600 font-semibold underline'>sign up.</Link>"</b></p>
        </div>
            </div>
        <div className='w-full md:w-[45%] flex justify-center'>
            <img src="homepage.png" className=' md:h-70  h-56 border rounded-xl shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] object-contain'/>
        </div>
        </div>
        <ImageSlider/>

        {/* */}

        {/* <!-- HERO SECTION --> */}
<section class="w-full bg-gray-100 py-16 px-6">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
{/* 
    <!-- Left Text Section --> */}
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Welcome to <span class="text-blue-600">THK Premium Collections</span>
      </h1>

      <p class="text-lg text-gray-700 mt-6">
        Explore a wide range of premium-quality products at the most affordable prices.
        We bring elegance, style, and comfort all together — specially curated for you.
      </p>

      <p class="text-gray-600 mt-4">
        Trusted by hundreds of customers, THK Premium Collections stands for:
      </p>

      <ul class="list-disc ml-5 mt-4 text-gray-700 space-y-2">
        <li>Premium Quality at Low Prices</li>
        <li>Trending Stylish Collections</li>
        <li>Fast Delivery & Trusted Service</li>
        <li>Best-in-class Shopping Experience</li>
      </ul>

      <button class="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg transition hover:cursor-pointer">
        <Link to='/products'>Shop Now</Link>
      </button>
    </div>

    {/* <!-- Right Image Section --> */}
    <div class="md:w-1/2 flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=700&q=80"
        alt="Premium Collection"
        class="rounded-xl shadow-2xl w-[90%] md:w-[80%]"
      />
    </div>

  </div>
</section>

{/* <!-- FEATURE CARDS SECTION --> */}
<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-3xl text-center font-bold text-gray-900 mb-12">
      Why Choose <span class="text-blue-600">THK Premium Collections?</span>
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* <!-- Card 1 --> */}
      <div class="p-6 border rounded-xl shadow hover:shadow-xl transition">
        <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
          class="w-16 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-center">Premium Quality</h3>
        <p class="text-gray-600 text-center mt-2">
          Only the best and most durable materials for every product.
        </p>
      </div>

      {/* <!-- Card 2 --> */}
      <div class="p-6 border rounded-xl shadow hover:shadow-xl transition">
        <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
          class="w-16 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-center">Lowest Prices</h3>
        <p class="text-gray-600 text-center mt-2">
          Get premium items without burning your pocket.
        </p>
      </div>

      {/* <!-- Card 3 --> */}
      <div class="p-6 border rounded-xl shadow hover:shadow-xl transition">
        <img src="https://cdn-icons-png.flaticon.com/512/2343/2343694.png"
          class="w-16 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-center">Fast Delivery</h3>
        <p class="text-gray-600 text-center mt-2">
          We ensure quick and safe delivery of your orders.
        </p>
      </div>

      {/* <!-- Card 4 --> */}
      <div class="p-6 border rounded-xl shadow hover:shadow-xl transition">
        <img src="https://cdn-icons-png.flaticon.com/512/2920/2920461.png"
          class="w-16 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-center">Customer Support</h3>
        <p class="text-gray-600 text-center mt-2">
          We're always here to help you with your queries.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Footer Section */}
<footer class="bg-gray-900 text-gray-300 py-12 mt-20">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* <!-- Brand --> */}
    <div>
      <h2 class="text-2xl font-bold text-white">THK Premium Collections</h2>
      <p class="mt-4 text-gray-400">
        Premium products at unbeatable prices. Quality you can trust.
      </p>
      <div class="flex gap-4 mt-5">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
             class="w-6 hover:opacity-75 cursor-pointer" />
        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
             class="w-6 hover:opacity-75 cursor-pointer" />
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111421.png"
             class="w-6 hover:opacity-75 cursor-pointer" />
      </div>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 class="text-xl font-semibold text-white">Quick Links</h3>
      <ul class="mt-4 space-y-3">
        <li class="hover:text-white cursor-pointer"><Link to='/'>Home</Link></li>
        <li class="hover:text-white cursor-pointer"><Link to='/products'>Products</Link></li>
        <li class="hover:text-white cursor-pointer"><Link to='/cartpage'>Cart</Link></li>
        <li class="hover:text-white cursor-pointer">About Us</li>
      </ul>
    </div>

    {/* <!-- Customer Support --> */}
    <div>
      <h3 class="text-xl font-semibold text-white">Customer Support</h3>
      <ul class="mt-4 space-y-3">
        <li class="hover:text-white cursor-pointer">FAQs</li>
        <li className="hover:text-white cursor-pointer">Return & Refund</li>
        <li class="hover:text-white cursor-pointer">Shipping Info</li>
        <li class="hover:text-white cursor-pointer">Help Center</li>
      </ul>
    </div>

    {/* <!-- Contact --> */}
    <div>
      <h3 class="text-xl font-semibold text-white">Contact Us</h3>
      <p class="mt-4 text-gray-400">Email:</p>
      <p class="text-white">support@thkcollections.com</p>

      <p class="mt-4 text-gray-400">Phone:</p>
      <p class="text-white">+91 98765 43210</p>

      <p class="mt-4 text-gray-400">Location:</p>
      <p class="text-white">Andhra Pradesh, India</p>
    </div>

  </div>

  {/* <!-- Footer Bottom --> */}
  <div class="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
    © 2025 THK Premium Collections. All rights reserved.
  </div>
</footer>

       
    </div>
  )
}

export default Home