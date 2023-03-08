import React from 'react';
// import './Navbar.css';
import {Outlet,Link} from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav>
      <div className="logo">EMPLOYEE</div>
      <div className="nav-links">
        <Link className="p1" to="/npget"><li>GET</li></Link>
        <Link className="p1" to="/update"><li>UPDATE</li></Link>
        <Link className="p1" to="/delete"><li>DELETE</li></Link>  
        <Link className="p1" to="/post"><li>POST</li></Link>  
      </div>
      </nav>
<Outlet/>
    </div>
  );
}

export default Navbar;