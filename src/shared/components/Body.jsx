import React from 'react';
import Card from "./Card.jsx";
import Details from "./Details.jsx";
// import {ctage} from './Homecard.jsx';
function truncate(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// function createCard(Detail){
//     return (
//       <Card
//         key={Detail.id}
//         schemeName={Detail.schemeName}
//         deadline={Detail.deadline}
//         eligibilty={Detail.eligibilty}
//         content={truncate(Detail.content, 300)}
//       />
//     );
// }

function Body({name2}) {
  // console.log(ctage);
  return (
    <div className="body">
      <div className='body-top'>
        <h2 className='title'>Schemes for Girl Child</h2>
        <div className="catergories">
          <a className="option" href="https://www.w3.org/">Live Schemes</a>
          <a className="option" href="https://www.w3.org/">Upcoming Schemes</a>
          <a className="option" href="https://www.w3.org/">Always Open</a>
        </div>
      </div>
      <div className="cards">
      {/* {Details.map(createCard)} */}
      {
        Details.map((Detail)=>{
          console.log(name2);

          {/* if(name2===Detail.name){ */}
            return  (
              <Card
                key={Detail.id}
                schemeName={Detail.schemeName}
                deadline={Detail.deadline}
                eligibilty={truncate(Detail.eligibilty, 60)}
                content={truncate(Detail.content, 300)}
              />
            );
          {/* }    */}
        })}
      </div>
    </div>
  )
}
export default Body;
