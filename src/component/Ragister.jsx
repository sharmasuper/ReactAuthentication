import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Ragister() {
    const navigate = useNavigate()
   
    const [value,setvalue] = useState({
        Name:"",
        Email:"",
        Passworld:"",
        checkBox : false
    })
    const [error, setError] = useState('')
    
  
  
   const handleChange = (e) =>{
    //   setvalue(
    //     {...value,
    //     [e.target.name]:e.target.value}
    // )
    setvalue((pre)=>(
        {...pre,[e.target.name]:e.target.value,
        } 
       
       
    ))
   }

// tp store value in localstorage

 function handleSubmit(e){
   e.preventDefault()

   if (!value.Passworld) {
    setError('Please fill password');
  }
 else if (!value.Email) {
    setError('Please fill Email');
  }
 else if (!value.Name) {
    setError('Please fill Name');
  }
 else if (!value.checkBox) {
    setError('Please fill checkbox');
  }
  else{
    localStorage.setItem("userRagister",JSON.stringify(value))
    navigate("/Login")
  }
  
 }


  return (
    <div >
      <h1>Ragister Page</h1>
      <form onSubmit={handleSubmit}>
            <label>Name</label><input name="Name" type='text' value={value.Name} required={error ? 'please fill' : undefined} placeholder='Name'  onChange={handleChange}  /> <br/>
      <pre/>
            <label>Email</label><input name="Email" type="Email" value={value.Email} required={error ? 'please fill' : undefined}  placeholder='Email' onChange={handleChange}/><br/>
      <pre/>
            <label>Password</label><input name='Passworld' required={error ? 'required' : undefined} type='Passworld' value={value.Passworld} placeholder='password' onChange={handleChange}/><br/>
      <pre/>
    <input type='checkbox' name='checkBox' required={error ? 'required' : undefined} value={value.check} onChange={()=>setvalue({...value,checkBox:!value.checkBox})} placeholder='accept term and conditon'></input>
      <button>Submit</button>
      </form>
    </div>
  );
}

export default Ragister;
