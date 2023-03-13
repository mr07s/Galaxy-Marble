import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  // console.log(user);
  const navigate =useNavigate();
  const logout =()=>{
    localStorage.removeItem('Profile');
    navigate('/');
    
  }
  const user =JSON.parse(localStorage.getItem('Profile'));
  return (  
   
    <>
<nav  className='navbar'>
<ul   className='navitems'>
  <li className='navlist'><Link to='/'>Home</Link></li>
  <li className='navlist'><Link to='/duedetails'>Duedetails</Link></li>
  <li className='navlist'><Link to='/addproduct'>AddProducts</Link></li>
  <li className='navlist'><Link to='/showproduct'>ShowProducts</Link></li>
  {
   user?(  <button className='navlist' onClick={logout}><Link to='/login'>LogOut</Link></button>):
  <button className='navlist'><Link to='/login'>LogIn</Link></button>
  }
  <li className='navlist'><Link to='/signup'>SignUp</Link></li>
 
</ul>


  </nav>
    </>
  )
}

export default Navbar