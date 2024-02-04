import React from 'react'
<<<<<<< HEAD
import Homecard from '../shared/components/Homecard'
import Sectorname from "../shared/api/Sectorname";
=======
import Homecard from '../components/Homecard'
import Sectorname from "../shared/api/Sectorname";
import Highligths from '../components/Highligths';
import Ngocard from '../components/Ngocard';
import { Feedback } from '../components/Feedback';
>>>>>>> 4feb2d7ad01e64f3d5643d74a89d3d16e4bf8b0e
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
    {/* <h2 className='subhead-homepage'>Categories</h2> */}
    <div className='layout-homepage'>
<<<<<<< HEAD
      {Sectorname.map(item =>{
        return <Homecard key={item.id} name={item.category} scheme={item.schemes} img={item.image}/>
      })}
    </div>
=======
      {Sectorname.map((item,key) =>{
        return <Homecard key={key} name={item.category} scheme={item.schemes} img={item.image}/>
      })}
    </div>
    <Highligths/>
    <Ngocard/>
    <Feedback/>
>>>>>>> 4feb2d7ad01e64f3d5643d74a89d3d16e4bf8b0e
    </>
  )
}

export default Homepage