import React from 'react'
import aboutImg from '../images/hero.png'
function About() {
  return (
    <div className='about'>
      <div className='about-model'>
        <img src={aboutImg} alt="about img" />
      </div>
      <div className='about-text'>
        <h2>We are the best <br />Real Estate Company</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit minus cum natus accusantium illum!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, rerum?
        </p>
        <button>View More Details</button>
      </div>
    </div>
  )
}

export default About
