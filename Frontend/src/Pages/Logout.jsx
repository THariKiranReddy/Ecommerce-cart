import React, { useContext, useEffect } from 'react'
import { AppContext } from '../ContextProvider'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { LogOutFun } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(()=>{
        LogOutFun();
        alert("logged out");
        navigate("/login");
    },[]);
  return null;
}

export default Logout