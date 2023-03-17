
import React, { useState } from 'react'
import './Signup.css'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {signup} from '../../actions/auth'


const Signup = () => {

const dispatch = useDispatch();
const navigate = useNavigate();
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('')

// console.log({name,email,password});
const handelSubmit =(e)=>{

e.preventDefault();

if(!name||!email||!password){
  alert("Enter name email and password");
}
dispatch(signup({name,email,password},navigate))

}


  return (
    <div className='outerbox'>
      <div className='formholder'>

    <form action=""  onSubmit={handelSubmit} className='authform'>
<label htmlFor="name" >
<h6>Name</h6>
<input type="text" placeholder='Type your Name' id='name' onChange={(e)=>{setName(e.target.value)}}/>
</label>


<label htmlFor="password">
<h6>Password</h6>
<input type="Password" placeholder='Type your Password' id='password'  onChange={(e)=>{setPassword(e.target.value)}}/>
</label>

<label htmlFor="email">
  <h6>Email</h6>
<input type="email" placeholder='Type your Email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
</label>

<div  id='buttondiv' >

<button className='createaccount' >Create Account</button>

</div>

    </form>
    
      </div>
    
    
    
    
    
    
    
    </div>
  )
}

export default Signup