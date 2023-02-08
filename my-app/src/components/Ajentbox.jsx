import React from 'react'
import Ajent from './Ajent'
function Ajentbox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt="ajents" />
        </div>
        <div className='a-b-text'>
            <h3>{props.name}</h3>
            <a href="#" className='agent-btn'>Learn More</a>
        </div>
    </div>
  )
}

export default Ajentbox
