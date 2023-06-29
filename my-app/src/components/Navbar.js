import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";
import hamburger from "../components/images/menu-line.svg";
import closecycle from "../components/images/close-circle-line.svg"
import "./Navbar.css";
const Navbar = () => {
  // console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nav, setNav] = useState(0);
  const Logout = () => {
    localStorage.removeItem("Profile");
    dispatch(logout());
    navigate("/");
  };

  const openorclosenav = (e) => {
    e.preventDefault();
    if (nav === 0) {
      setNav(1);
    } else {
      setNav(0);
    }
  };

  const user = JSON.parse(localStorage.getItem("Profile"));
  return (
    <>
     
       
        <nav className="navbar">
          <div className="navbarleft">
            {user ? (
              <ul className="navitems">
                <li className="navlist">
                  <Link to="/">GalaxyMarble</Link>
                </li>
                <li className="navlist">
                  <Link to="/duedetails">Duedetails</Link>
                </li>
                <li className="navlist">
                  <Link to="/addduedetails">AddDuedetails</Link>
                </li>
                <li className="navlist">
                  <Link to="/addproduct">AddProducts</Link>
                </li>
                <li className="navlist">
                  <Link to="/showproduct">ShowProducts</Link>
                </li>
              </ul>
            ) : (
              <></>
            )
            }
          </div>

          <div className="navbarright">
            <ul>
              {user ? (
                <button className="navlist authbutton" onClick={Logout}>
                  <Link to="/login">LogOut</Link>
                </button>
              ) : (
                <Fragment>
                  <button className="navlist authbutton">
                    <Link to="/login">LogIn</Link>
                  </button>
                  <button className="navlist authbutton">
                    <Link to="/signup">SignUp</Link>
                  </button>
                </Fragment>
              )}
            </ul>
          </div>
        </nav>
  
    </>
  );
  // return (
  //   <>
  //     <div className="navselect" onClick={openorclosenav}>
  //       {
  //       nav?(
  //         <img src={closecycle} className="closenav"/>
  //       ) : (
  //         <img src={hamburger} width="10px" className="hamburger" />
  //       )}
  //     </div>
  //     {nav ? (
  //       <nav className="navbar">
  //         <div className="navbarleft">
  //           {user ? (
  //             <ul className="navitems">
  //               <li className="navlist">
  //                 <Link to="/">GalaxyMarble</Link>
  //               </li>
  //               <li className="navlist">
  //                 <Link to="/duedetails">Duedetails</Link>
  //               </li>
  //               <li className="navlist">
  //                 <Link to="/addduedetails">AddDuedetails</Link>
  //               </li>
  //               <li className="navlist">
  //                 <Link to="/addproduct">AddProducts</Link>
  //               </li>
  //               <li className="navlist">
  //                 <Link to="/showproduct">ShowProducts</Link>
  //               </li>
  //             </ul>
  //           ) : (
  //             <></>
  //           )}
  //         </div>

  //         <div className="navbarright">
  //           <ul>
  //             {user ? (
  //               <button className="navlist authbutton" onClick={Logout}>
  //                 <Link to="/login">LogOut</Link>
  //               </button>
  //             ) : (
  //               <Fragment>
  //                 <button className="navlist authbutton">
  //                   <Link to="/login">LogIn</Link>
  //                 </button>
  //                 <button className="navlist authbutton">
  //                   <Link to="/signup">SignUp</Link>
  //                 </button>
  //               </Fragment>
  //             )}
  //           </ul>
  //         </div>
  //       </nav>
  //     ) : (
  //       <></>
  //     )}
  //   </>
  // );
};

export default Navbar;
