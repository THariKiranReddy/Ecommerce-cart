import React, { useContext, useState } from 'react'
import { AppContext } from '../ContextProvider';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Products = () => {
     const {data,AddToCart,setSearch,search,loading} = useContext(AppContext);
     const [filter, setFilter] = useState("");
    const sortedData = [...data];
   
    // Ascending 
    if (filter === "asc") {
  sortedData.sort((a, b) => a.price - b.price);
}
// Descending
   if(filter === "dsc") {
    sortedData.sort((a,b) => b.price - a.price);
   }

 if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
      </div>
    );
  } 
  return (
    <div className='bg-gradient-to-b from-gray-100 to-white min-h-screen'>
      <div className='h-3'></div>
        <h1 className='text-center text-lg font-semibold text-gray-800'>Products
          <div className="w-20 h-1 bg-gray-700 mx-auto mt-1 rounded"></div>
        </h1>
        <div className='flex justify-between mt-10 ml-3'>
          <div className='flex justify-between w-96 items-center gap-4 bg-white shadow-md p-4 rounded-xl mb-6 mx-10'>
            <div>
           <input type="text" placeholder=' ⌕ Search'  onChange={(e) => setSearch(e.target.value)} value={search} className='w-40 border-2 rounded-md hover:cursor-pointer bg-slate-200 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:bg-white  ml-3 px-3 border-gray-400'/>
         </div>
         <div>
          <select className='hover:cursor-pointer border-2  p-2 mb-2 rounded-md bg-slate-200 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] border-gray-400' onChange={(e)=>setFilter(e.target.value)}>
            <option value="">Filter by price</option>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
         </div>
          </div>
         <div >
        <Link to="/cartpage" ><FaCartShopping className='mr-10 w-10 h-10 hover:cursor-pointer'/></Link> 
         </div>
        </div>
        {/* <div className='flex flex-wrap justify-between mt-10 space-y-5 '> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 px-10 pb-10">
              {sortedData.map((item) => { 
                return <div className=' w-64 h-64 hover:bg-slate-200 hover:cursor-pointer duration:30 rounded-md border-2 border-gray-400 ml-10 mr-10 shadow hover:shadow-xl transition' key={item.id}>
                  <img src={item.thumbnail} className='w-24 h-45 mx-auto transform hover:scale-110 transition-all duration-300 mt-5'/>
                  <div className='ml-6 mt-3'>
                       <h3>{item.title}</h3>
                  <div className='flex justify-between mr-5 mt-5'>
                     <p className=' text-white pl-2 pr-2 rounded-md bg-gray-800  text-sm px-3 py-1 '><b>₹</b>{item.price}</p>
                    <button className="bg-gray-700 pl-2 pr-2 rounded-md hover:bg-slate-400 hover:text-black text-white" onClick={()=>AddToCart(item)}>Add to Cart</button>
                  </div>
                  </div>
                </div>
              })}
        </div>
    </div>
  )
}

export default Products