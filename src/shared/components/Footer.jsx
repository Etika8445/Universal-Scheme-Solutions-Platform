import React from 'react';
import {NavLink} from 'react-router-dom';
const d = new Date();
let year = d.getFullYear();
function Footer() {
  return (
    <>
    <footer>
        <div className="footer">
            <div className='footer-top'>
                <section>
                    <img src="./logo.jpg" alt="SME" />
                    <p>
                    Your One-Stop Shop for Government and Private Support.
                    </p>
                </section>
                <section className='links'>
                    <NavLink className="link" activeClassName="active_class" exact to="/">Home</NavLink>
                    <NavLink className="link"  activeClassName="active_class" to="/about">About Us</NavLink>
                    <NavLink className="link"  activeClassName="active_class" to="/contact">Contact Us</NavLink>
                </section>
            </div>
            <div className="sub-footer">
                Copyright © {year} Schemes Made Easy
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer;