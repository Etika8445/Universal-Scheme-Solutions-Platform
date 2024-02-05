import React from 'react'
import { useNavigate } from 'react-router-dom';
const Homecard = ({key, name,scheme, img}) => {
  let navigate= useNavigate();
  const update = (name) => {
    navigate('/scheme', { state: { name1: name } });
  }
  return (
    <>
    <div className='card-homecard'>
        <p className='topic-homecard'>{name}</p>
        <div className='imgcover-homecard'><img  className='img-homecard' src={img} alt="category"/></div>
        <div className='scheme-homecard'>
            <p className='p-homecard'>{scheme}</p>
            <p className='sub-homecard'>+ schemes</p>
        </div>
        <button  className='more-homecard' onClick={()=>update({name})}>See more</button> 
    </div>
    </>
  )
}
export default Homecard