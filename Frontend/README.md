# Project Flow
  
  This is Ecommerce web Application , this contains the userprofile page and login, logout, signup page for new users and profile page for the user. Products page will e shown only when the user is authenticated , authentication is done through JWT token and this will very the logged in user using JWT token verifier .

## Tech Stack

   * React.js.
   * Java Script.
   * Mongoose Atlas.
   * Tailwind CSS.
   * HTML.
   * REST API'S

## Flow 
    
   * when the user open this application wil redirected to Home page in that there will be about the site and Navbar to navigate through pages.

   * Frontend
     
     The data is first stored in backend mongoose database using post request though contextprovider.jsx and used through all the remaining pages.

   * Backend 
     
     The Data is Authenticated here withe JWT verifier , this increases security , authenticating only in client side doesn't have more security.

## PORTS
   
    POST - (http://localhost:5000/register)    <!--  For sending user data  to store in Data Base -->

    GET - (https://dummyjson.com/products/search?q=${search})   <!--  To get  the list of products based on search param   -->
    
    POST - (http://localhost:5000/login)       <!-- To verify the Login user  -->
    
    GET - (http://localhost:5000/userprofile)   <!--  To get the users data from data base   -->

    POST - (http://localhost:5000/cart)          <!-- To add the cart items to database and to fetch the cart items from data    base to render into DOm --> 

    PUT - (http://localhost:5000/cart/increase/${itemId})      <!-- To update the quantity of cart items --> 

    DELETE - (http://localhost:5000/cart/${itemId})   <!--  To delete the items from cart  -->  