import React, { useState } from 'react'
import TinderCards from 'react-tinder-card'
import "./Tinder.css";
function Tinder() {

  const [car,setCar] = useState([
    {
      name:'Iron Man',
      url:'https://pbs.twimg.com/media/FYIAFTeUIAEGt4f.jpg'
    },
    {
      name:'Thor',
      url:'https://pbs.twimg.com/media/FXKJkgKUUAAee_X.jpg'
    },
    {
      name:'Captain America',
      url:'https://i.ytimg.com/vi/LDBojdBAjXU/maxresdefault.jpg'
    }
  ])
  return (
    <div className='cardContainer'>
      {car.map(car=> (
        <TinderCards preventSwipe={['up','down']} className='swipe' key={car.name}>
          <div className='card' style={{backgroundImage:`url(${car.url})`}}>
            <h1>{car.name}</h1>
          </div>
        </TinderCards>
      ))}
    </div>
  )
}

export default Tinder