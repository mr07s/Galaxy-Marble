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
  <div className='navbarleft'>
  <ul   className='navitems'>
   
  <li className='navlist'><Link to='/'>GalaxyMarvel</Link></li>
  <li className='navlist'><Link to='/duedetails'>Duedetails</Link></li>
  <li className='navlist'><Link to='/addproduct'>AddProducts</Link></li>
  <li className='navlist'><Link to='/showproduct'>ShowProducts</Link></li>

  </ul>
  </div>

  <div className="navbarright">
<ul>
  {
   user?( 
    <button className='navlist authbutton' onClick={logout}><Link to='/login'>LogOut</Link></button>):
  <button className='navlist authbutton'><Link to='/login'>LogIn</Link></button>
  }
  <button className='navlist authbutton'><Link to='/signup'>SignUp</Link></button>
 
</ul>
</div>

  </nav>
    </>
  )
}

export default Navbar