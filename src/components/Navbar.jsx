import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'none' : 'underline',
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };

  return (
    <div class="container">
      <div class="image">
      <img src="" alt="" />
      </div>
    <nav>
      <NavLink to="/" style={navLinkStyles}> Home </NavLink>
      <NavLink to="/about" style={navLinkStyles}>About</NavLink>
      <NavLink to="/contact-us" style={navLinkStyles}>Contactus</NavLink>
      <NavLink to="/blogs" style={navLinkStyles}>Blogs</NavLink>
      {/* <div class="dropdown">
      <NavLink to="/component" style={navLinkStyles}>components</NavLink>
      </div> */}

    </nav>
    </div>
  );
}
