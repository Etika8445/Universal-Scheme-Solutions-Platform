import React from 'react'
import Homecard from '../components/Homecard'
import Sectorname from "../shared/api/Sectorname";
import Highligths from '../components/Highligths';
import Ngocard from '../components/Ngocard';
import { Feedback } from '../components/Feedback';
const Homepage = () => {


  return (
    <>
    <div className='banner-homepage'>
      <div className='slogan-homepage'>
        <h3 style={{margin:0}}>Your One-Stop for</h3> 
        <h1 style={{margin:0}}>Government and Private</h1>
        <h2 style={{margin:0}}>Schemes</h2>
      </div>
    </div>
    <h1 className='head-homepage'>Find Your Schemes </h1>
    <div className='layout-homepage'>
      {Sectorname.map((item,key) =>{
        return <Homecard key={key} name={item.category} scheme={item.schemes} img={item.image}/>
      })}
    </div>
    <Highligths/>
    <Ngocard/>
    <Feedback/>
    </>
  )
}

export default Homepage