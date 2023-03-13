import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {login} from '../../actions/auth'
import { useNavigate } from 'react-router-dom';





const Login = () => {
const [email,setEmail] =useState('');
const [password,setPassword] =useState('');
// console.log(name);
const dispatch=useDispatch()
const navigate = useNavigate();

const handlesubmit =(e)=>{



  e.preventDefault();
dispatch(login({email,password},navigate));



}




  return (
    <div className='outerbox'>
    <div className='formholder'>

  <form action="" className='authform' >
<label htmlFor="email" >
<h6>Email</h6>
<input type="Email" placeholder='Type your email' id='email' onChange={(e)=>setEmail(e.target.value)} />
</label>


<label htmlFor="password">
<h6>Password</h6>
<input type="Password" placeholder='Type your Password' id='password'  onChange={(e)=>setPassword(e.target.value)}  />
</label>


<div  id='buttondiv' >

<button className='createaccount' onClick={handlesubmit} >LogIn</button>

</div>

  </form>
  
    </div>
  
  
  
  
  
  
  
  </div>
  )
}

export default Login