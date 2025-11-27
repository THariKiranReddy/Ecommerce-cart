import React, { useContext, useState } from 'react';
import { AppContext } from '../ContextProvider';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const CartComponent = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, deleteCartItem  } = useContext(AppContext);

 const total = cartItems.reduce((acc, item) => {
    console.log("Price:", item.price, "Quantity:", item.quantity);
    return acc + item.price * item.quantity;
  },0);


  return (
    <div>
    <p className=' text-xl font-bold bg-blue-300 mt-5 ml-5 rounded-md pl-2 pr-2 hover:bg-blue-200  cursor-pointer w-44'> <Link to="/products" >Back to Products</Link></p>
         <div className="p-6 bg-white text-black rounded-xl w-[700px]  flex flex-col mx-auto mt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]  overflow-y-auto hover:cursor-pointer">
      <h2 className="text-2xl font-bold mb-4 mx-auto">Your Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div key={item._id} className="flex items-center justify-between mb-4 p-3 bg-gray-100 rounded-lg hover:bg-slate-300 transition duration-300">

          <div className='w-64'>
            <img className='w-[70px] h-[70px] mx-auto' src={item.image}/>
            <p className="font-semibold ml-5">{item.name}</p>
            <p className="text-sm text-gray-700 ml-5">₹{item.price} each</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(item._id)}
              className="w-7 h-7 bg-gray-300 rounded-md text-black hover:bg-white"
            >
              -
            </button>

            <span className="text-lg font-semibold">{item.quantity}</span>

            <button
              onClick={() => increaseQuantity(item._id)}
              className="w-7 h-7 bg-gray-300 rounded-md text-black hover:bg-white "
            >
              +
            </button>
          </div>

          <p className="font-semibold">₹{item.price * item.quantity}</p>

          <button
            onClick={() => deleteCartItem(item._id)}
            className="text-red-600 text-2xl font-bold ml-3"
          >
            <MdDelete/>
          </button>

        </div>
      ))}

      <hr className="my-3" />

      <p className="text-xl font-bold">
        Total: ₹{total}
      </p>
    </div>
    </div>
  );
};

export default CartComponent;



