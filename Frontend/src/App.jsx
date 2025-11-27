import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Pages/Layout';
import Error from './Pages/Error';
import ProfilePage from './Pages/ProfilePage';
import PrivateRoute from './PrivateRoute';
import Login from './Pages/Login';
import Products from './Pages/Products';
import SignUp from './Pages/SignUp';
import Logout from './Pages/Logout';
import Home from './Pages/Home';
import CartComponent from './component/CartComponent';

const router = createBrowserRouter([
{
path:"/",
element:(

  <Layout/>
  ),
errorElement:<Error/>,
children:[
  {
    index : true,
    element : <Home/>
  },
 {
  path:"userprofile",
  element:<ProfilePage/>
},
{
 path:"products",
 element:
 <PrivateRoute>
  <Products/>
 </PrivateRoute>
},
{
  path:"login",
  element:<Login/>
},
{
  path:"signup",
  element:<SignUp/>
},
{
  path:"logout",
  element:<Logout/>
},
{
  path:"cartpage",
  element:<CartComponent/>
}
]
}
]);

const App = () => {
  return (
          <RouterProvider router={router}></RouterProvider>
  )
}

export default App