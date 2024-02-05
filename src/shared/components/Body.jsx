import React from 'react';
import Card from "./Card.jsx";
import Details from "./Details.jsx";
import { useLocation } from 'react-router-dom';
import Highligths from '../../components/Highligths.jsx';
import Ngocard from '../../components/Ngocard.jsx';
import { Feedback } from '../../components/Feedback.jsx';
function truncate(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}
function Body() {
  const location = useLocation();
  const name1 = location.state?.name1.name;
  const filteredDetails = name1 ? Details.filter(detail => detail.name === name1) : Details;
  const heading= name1 ? name1: "All Schemes";
  return (
    <>
    <div className="body-head">
      <div className='body-top'>
        <h1 className='title'>{heading}</h1>
        <p></p>
        {/* <div className="catergories">
          <a className="option" href="https://www.w3.org/">Live Schemes</a>
          <a className="option" href="https://www.w3.org/">Upcoming Schemes</a>
          <a className="option" href="https://www.w3.org/">Always Open</a>
        </div> */}
      </div>
      <div className="cards">
        {filteredDetails.map((Detail)=>{
          return (
            <Card
              key={Detail.id}
              schemeName={Detail.schemeName}
              deadline={Detail.deadline}
              eligibilty={truncate(Detail.eligibilty, 30)}
              content={truncate(Detail.content, 300)}
              url={Detail.url}
              videoUrl={Detail.videoUrl}
            />
          )})}  
      </div>
    </div>
    <Highligths/>
    <Ngocard/>
    <Feedback/>
  </>
  )
}
export default Body;
