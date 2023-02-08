import React from 'react'
import Propertybox from './Propertybox'
import pimage1 from '../images/p1.png'
import pimage2 from '../images/p2.png'
import pimage3 from '../images/p3.png'

function Properties() {
  return (
    <div className='product'>
      <div className='p-heading'>
        <h3>Properties</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, labore.</p>
      </div>
      <div className='product-container'>
         <Propertybox image={pimage1} name="Himanshu's-Villa" price="Rs.2,49467" />
         <Propertybox image={pimage2} name="Rahul-KI-Dukan" price="Rs.2,49598" />
         <Propertybox image={pimage3} name="Prashant'Bangla" price="Rs.20,00090" />
      </div>
    </div>
  )
}

export default Properties
