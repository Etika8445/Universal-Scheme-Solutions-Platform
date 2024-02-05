import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../shared/components/logo.jpg"
const Ngocard = () => {
  return (
    <>
        <div className='card-ngocard'>
            <div className='box-ngocard'>
                <h1>"Empowering Lives, Enabling Change"</h1>
                <p className='top-ngocard'>Join Schemes Made Easy's Journey with Purpose</p>
                <p className='line-ngocard'>If you desire to support people through service or make a positive impact through donations, we welcome your commitment to compansion and generosity.</p>
                <br></br>
                <p className='see-ngocard'>You can help without providing services or any donations. How!?</p>
                <NavLink className='go-ngocard' activeClassName="active_class" to="/">Click to Know More</NavLink>
            </div>
            <div className='img-ngocard' >
                <img className='logo-ngocard' src={logo} alt='logo'/>
            </div>
        </div>
    </>
  )
}

export default Ngocard