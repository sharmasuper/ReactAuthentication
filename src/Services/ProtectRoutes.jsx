import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectRoutes() {

  const auth = localStorage.getItem("loggedin")
 return auth ? <Outlet/> : <Navigate to={"/Login"}/>
  
}

export default ProtectRoutes;
