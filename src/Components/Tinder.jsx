import React, { useState } from 'react'
import TinderCards from 'react-tinder-card'
import "./Tinder.css";
function Tinder() {

  const [card,setCard] = useState([
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
      {card.map(card=> (
        <TinderCards preventSwipe={['up','down']} className='swipe' key={card.name}>
          <div className='card' style={{backgroundImage:`url(${card.url})`}}>
            <h1>{card.name}</h1>
          </div>
        </TinderCards>
      ))}
    </div>
  )
}

export default Tinder