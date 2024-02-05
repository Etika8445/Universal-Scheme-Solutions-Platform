import React from 'react';
import {NavLink} from 'react-router-dom';
const d = new Date();
let year = d.getFullYear();
function Footer() {
  return (
    <>
    <div className='box-footer'>
      <div className='subbox-footer'>
        <div className='div1-footer'>
            <h2>Contact</h2>
            <p>70221 64511</p>
            <div className='email-footer'>schememe@gmail.com</div>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
        <div className='div2-footer'>
            <h2>Links</h2>
            <div className='navhead-footer'>
            <NavLink className="nav-footer" activeClassName="active_class" exact to="/">Home </NavLink>
            <NavLink className="nav-footer"  activeClassName="active_class" to="/scheme">Schemes </NavLink>
            <NavLink className="nav-footer"  activeClassName="active_class" to="/about">About </NavLink>
            <NavLink className="nav-footer"  activeClassName="active_class" to="/contact">Contact</NavLink>
            </div>
        </div>
        <div className='div3-footer'>
            <h2>Help people with us</h2>
            <p>If you desire to support people through service or make a positive impact through donations, we welcome your commitment to compansion and generosity.</p>
            <p>You can help without providing services or any donations. How!?</p>
            <br></br>
            <NavLink className='go-footer' activeClassName="active_class" to="/">Click to Know More</NavLink>
        </div>
        <div className='div4-footer'>
            <h2>Categories</h2>
            <p>Education</p>
            <p>Finance</p>
            <p>Women and Child</p>
            <p>International Affairs</p>
            <p>Health and Wellness</p>
            <p>Art and Culture</p>
            <p>Sports</p>
            <p>Tourism</p>
            <p>Defence</p>
            <p>Innovation & Techonolgy</p>
            <p>Food and Agriculture</p>
        </div> 
      </div>         
        <div className='low-footer'>
          <p>Copyright © {year} Schemes Made Easy</p>
        </div>

    </div>
    </>
  )
}

export default Footer;


// {/* <footer>
//         <div className="footer">
//             <div className='footer-top'>
//                 <section>
//                     <img src="./logo.jpg" alt="SME" />
//                     <p>
//                     Your One-Stop Shop for Government and Private Support.
//                     </p>
//                 </section>
//                 <section className='links'>
//                     <NavLink className="link" activeClassName="active_class" exact to="/">Home</NavLink>
//                     <NavLink className="link"  activeClassName="active_class" to="/about">About Us</NavLink>
//                     <NavLink className="link"  activeClassName="active_class" to="/contact">Contact Us</NavLink>
//                 </section>
//             </div>
//             <div className="sub-footer">
//                 Copyright © {year} Schemes Made Easy
//             </div>
//         </div>
//     </footer> */}