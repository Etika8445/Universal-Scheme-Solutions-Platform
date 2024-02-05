import React from 'react';
function Card(props) {
  return (
    <div className="card">
      <div className="card-name">
        <h3>{props.schemeName}</h3>   
      </div>
      <div className='content'>
        <h4>{props.content}</h4>
        <div className="detail">
          <div className="info">
            <h4>Deadline</h4>
            <p>{props.deadline}</p>
          </div>
          <div className="info">
            <h4>Eligibilty</h4>
            <p>{props.eligibilty}</p>
          </div>
        </div>
      </div>
      <div className="descp">
        <a href={props.url} className="btn" target="_blank">Know More</a>
        <a href={props.videoUrl} className="btn" target="_blank">Visual Guide</a>
      </div>
    </div>
  )
}

export default Card
