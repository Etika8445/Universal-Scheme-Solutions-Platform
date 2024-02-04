import React from 'react'
import Navbar from './Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Homepages from '../../pages/Homepages';
import About from '../../shared/pages/About';
import Contact from '../../shared/pages/Contact';
import Body from '../../shared/components/Body';
import Sponsor from '../../shared/pages/Sponsor';
// import Body from './Body';
const Header = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepages/>}/> 
        <Route path='/about' element={<About />}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/scheme' element={<Body/>}/> 
        <Route path='/sponsor' element={<Sponsor/>}/>
        <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>
    </>
  )
}

export default Header;