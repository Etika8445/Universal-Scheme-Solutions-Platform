import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./logo.jpg"
// import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <>
      <div className='header'>
        <div className="header__left">
          <img src={logo} alt=""/>
          <NavLink className="headerOption" activeClassName="active_class" to="/">Home</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/scheme">Scheme</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/sponsor">NGO</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/about">About Us</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/contact">Contact Us</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar