import React from 'react'
import Homecard from '../shared/components/Homecard'
import Sectorname from "../shared/api/Sectorname";
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
      {Sectorname.map(item =>{
        return <Homecard key={item.id} name={item.category} scheme={item.schemes} img={item.image}/>
      })}
    </div>
    </>
  )
}

export default Homepage