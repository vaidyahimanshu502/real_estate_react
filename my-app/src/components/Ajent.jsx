import React from 'react'
import Ajentbox from './Ajentbox'
import ajentimage1 from '../images/s1.png'
import ajentimage2 from '../images/s2.png'
import ajentimage3 from '../images/s3.png'
function Ajent() {
  return (
    <div className='agent'>
        <div className='a-heading'>
            <h1>Ajent</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, odit!</p>
            <div className='b-container'>
      <Ajentbox image={ajentimage1} name="Himanshu"  />
      <Ajentbox image={ajentimage2} name="Rahul"  />
      <Ajentbox image={ajentimage3} name="Prashant"  />
      </div>
        </div>
    </div>
  )
}

export default Ajent
