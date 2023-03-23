import React from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/auth';
import './Navbar.css'
const Navbar = () => {
  // console.log(user);
  const navigate =useNavigate();
  const dispatch=useDispatch();

  const Logout =()=>{
    localStorage.removeItem('Profile');
  dispatch(logout())
    navigate('/');
    
  }
  const user =JSON.parse(localStorage.getItem('Profile'));
  return (  
   
    <>
<nav  className='navbar'>
  <div className='navbarleft'>
    {
      user?(
  <ul   className='navitems'>
   
   
  <li className='navlist'><Link to='/'>GalaxyMarvel</Link></li>
  <li className='navlist'><Link to='/duedetails'>Duedetails</Link></li>
  <li className='navlist'><Link to='/addproduct'>AddProducts</Link></li>
  <li className='navlist'><Link to='/showproduct'>ShowProducts</Link></li>
  
   
  </ul>
      ):
      <></>
}
  </div>

  <div className="navbarright">
<ul>
  {
   user?( 
    <button className='navlist authbutton' onClick={Logout}><Link to='/login'>LogOut</Link></button>):
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