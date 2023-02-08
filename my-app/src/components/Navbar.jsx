import React from 'react'
import Header from './Header';
import logo from '../images/logo1.png'
function Navbar() {
  return (
      <nav>
        <a href="#" className='logo'>
        <img src={logo} alt="logo" />
        </a>
        <input className='menu-btn' type="checkbox" id='menu-btn' />
        <label htmlFor="menu-btn" className='menu-icon'>
        <span className='menu-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Ajent</a></li>
            <li><a href="#">Property</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className='property'>Properties</a>
        <a href="#" className='header-btn'>LogIn/SignUp</a>
      </nav>
  )
}
export default Navbar;