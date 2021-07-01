import React from 'react'

import './Card.scss'

function Card(progs){
  const { card } = progs
    return (
        
              <li className="Card-item">
              { card.cover && <img src={card.cover} className = "card-cover" alt="sonquachdev" /> }
                {card.title}
              </li>
             
        )
}

export default Card