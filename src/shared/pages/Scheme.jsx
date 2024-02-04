import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../shared/components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

function Scheme() {
  return (
      <>
      <BrowserRouter>
           <Header />
      </BrowserRouter>
      <Body />
      <Footer />
    </>
  )
}

export default Scheme
