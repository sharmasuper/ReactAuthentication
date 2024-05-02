import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const  userName = JSON.parse(localStorage.getItem("userRagister")) 
    const navigate = useNavigate()

   const handleClick = () =>{
      localStorage.removeItem("loggedin")
      navigate('/Login')
    }

  return (
    <>
    <div>
      <h1>Welcome - user - {userName.Name}</h1> 
      <button onClick={handleClick}>Logout</button>
      </div>
    </>
  );
}

export default Home;
