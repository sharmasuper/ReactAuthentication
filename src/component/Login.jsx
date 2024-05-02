import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const Navigate = useNavigate()
    const [value,setvalue] = useState({
        Email:"",
        Passworld:""
    })
    const [error,setError] = useState('')
   
function handleChange (e) {
  setvalue((pre)=>({...pre,[e.target.name]:e.target.value}))
}

const handleSubmit = (e) =>{
    e.preventDefault()
  console.log(value)
  const loggedUser = JSON.parse(localStorage.getItem('userRagister'))
  if(value.Email === loggedUser.Email && value.Passworld ==loggedUser.Passworld){
    localStorage.setItem("loggedin",true)
   Navigate("/")
  }else{
    alert(Error("wrong email and passworld"))
  }
}

  return (
   <> 
    <div >
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
           
            <label>Email</label><input name="Email" type="Email" value={value.Email} required={error ? 'please fill' : undefined}  placeholder='Email' onChange={handleChange}/><br/>
      <pre/>
            <label>Password</label><input name='Passworld' required={error ? 'required' : undefined} type='Passworld' value={value.Passworld} placeholder='password' onChange={handleChange}/><br/>
      <pre/>
      <button>Login</button>
      <p>don't have account please register</p><NavLink to="/Ragister">Ragister here</NavLink>
      </form>
    </div>
   </>
  );
}

export default Login;
