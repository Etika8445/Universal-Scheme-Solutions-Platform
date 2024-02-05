import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SponsorCards from '../components/SponsorCards'
import SponsorCard from '../components/SponsorCard';

function Sponsor() {
  return (
    <>
      <div className='sponsor-header'>
        <h1> OUR VALUED NGO COLLABORATORS <FavoriteIcon fontSize='large'/></h1>
        <h3>Together, we're transforming opportunities and changing lives!</h3>
        <div className='sponsor-cards'>
          {SponsorCards.map((Card) => {
              return  (
              <SponsorCard
                  key={Card.id}
                  imgUrl={Card.imgUrl}
                  url={Card.url}
              />
              );
          })}
        </div>
      </div>
    </>
  )
}

export default Sponsor
