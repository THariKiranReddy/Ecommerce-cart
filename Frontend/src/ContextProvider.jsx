import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const AppContext  = createContext(); 
const ContextProvider = ({children}) => {
    const [ data , setData ] = useState([]);
    const [search, setSearch] = useState("");
    const [ isAuth , setIsAuth ] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [ loading , setLoading ] = useState(false);

    const Login = ()=> {setIsAuth(true);
      console.log("logged in");
    };
    const LogOutFun = ()=> {
       localStorage.removeItem("token");
        setIsAuth(false);
        
    };
    const fetchUser = async() =>{
        console.log("started");
        try{
           const res = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
        const data = res.data.products;
        console.log(data); 
        setData(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchUser();
},[search]);

// Adding item into cart
const AddToCart = async (product) => {
  const token = localStorage.getItem("token");
  try {
    // const res = await fetch("http://localhost:5000/cart", {
    const res = await fetch("https://ecommerce-cart-vb5e.onrender.com/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        //  userId,
        productId: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail
      }),
    });

    const data = await res.json();
    console.log("Cart Response:", data);

    if (res.ok) {
      alert("Item added to cart!");
      fetchCartItems();
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
  }
};


const fetchCartItems = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    // const res = await fetch("http://localhost:5000/cart", {
    const res = await fetch("https://ecommerce-cart-vb5e.onrender.com/cart", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      setCartItems(data);
      console.log(data,"fetched data");
    } else {
      console.error("Failed to fetch cart items");
    }
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
};

// Call fetchCartItems on mount or when user logs in
useEffect(() => {
  fetchCartItems();
}, [isAuth]); // or [token]

// Increase quantity of a cart item
const increaseQuantity = async (itemId) => {
  const token = localStorage.getItem("token");
  try {
    // const res = await fetch(`http://localhost:5000/cart/increase/${itemId}`, {
    const res = await fetch(`https://ecommerce-cart-vb5e.onrender.com/cart/increase/${itemId}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (res.ok) {
      fetchCartItems();
    }
  } catch (error) {
    console.error("Error increasing quantity:", error);
  }
};

// Decrease quantity of a cart item
const decreaseQuantity = async (itemId) => {
  const token = localStorage.getItem("token");
  try {
    // const res = await fetch(`http://localhost:5000/cart/decrease/${itemId}`, {
     const res = await fetch(`https://ecommerce-cart-vb5e.onrender.com/cart/decrease/${itemId}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (res.ok) {
      fetchCartItems();
    }
  } catch (error) {
    console.error("Error decreasing quantity:", error);
  }
};

// Delete a cart item
const deleteCartItem = async (itemId) => {
  const token = localStorage.getItem("token");
  try {
    // const res = await fetch(`http://localhost:5000/cart/${itemId}`, {
    const res = await fetch(`https://ecommerce-cart-vb5e.onrender.com/cart/${itemId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (res.ok) {
      fetchCartItems();
    }
  } catch (error) {
    console.error("Error deleting cart item:", error);
  }
};


  return (
    <AppContext.Provider value={{data, isAuth , LogOutFun , Login, AddToCart ,  cartItems, increaseQuantity,decreaseQuantity,deleteCartItem , setSearch , search,loading,setLoading}}>{children}</AppContext.Provider>
  )
}
export default ContextProvider