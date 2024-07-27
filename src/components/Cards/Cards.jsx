import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import "./card.css"
const Cards = ({text,subtitle}) => {
  return (
    <div className='card'>
       <span className='sub-card'>{subtitle}</span>
       <h1>{text}</h1>
       <ul className='list-card'>
       <li><FaCheck/> Private board sharing</li>
       <li><FaCheck/>  5 Gb Storage</li>
       <li><FaCheck/>  Web Analytics</li>
       <li><FaCheck/> Private Mode</li>
       </ul>
       <a href="#" className='btn-card'>Subscribe</a>
    </div>
  )
}

export default Cards