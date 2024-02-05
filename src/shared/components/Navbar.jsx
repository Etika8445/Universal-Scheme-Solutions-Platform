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
          <NavLink className="headerOption" activeClassName="active_class" to="/about">About Us</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/contact">Contact Us</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/scheme">Scheme</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/sponsor">Our NGO Partners</NavLink>

        </div>
      <div className="header__right">
        {/* <div className="header__search"> 
          <SearchIcon />
          <input type="text" placeholder="Search" className='search-input'/>
        </div>  */}
      </div>
      </div>
    </>
  );
}

export default Navbar