import React from 'react'

function SponsorCard(props) {
  return (
    <a href={props.url} target='blank'><img className='sponsor-card' src={props.imgUrl} alt="logo"/></a>
  )
}

export default SponsorCard
