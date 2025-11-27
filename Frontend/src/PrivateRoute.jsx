import React, { useContext } from 'react'
import { AppContext } from './ContextProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(AppContext);
    if(!isAuth){
        return <Navigate to='/login'/>
    }
  return children;
}

export default PrivateRoute