import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SponsorCards from '../components/SponsorCards'
import SponsorCard from '../components/SponsorCard';

function Sponsor() {
  return (
    <><div>
      <div className='sponsor-header'>
        {/* <h1> OUR VALUED NGO COLLABORATORS <FavoriteIcon fontSize='large'/></h1> */}
        <h2>Unlock change with every login! Explore schemes, collaborate with NGOs, and earn daily points to support underprivileged children. Your clicks create impact on 'Schemes Made Easy'!</h2>
        
      </div>
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
