
import { Link } from 'react-router-dom'


import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar'>
     {/* <img className='h' src="https://svgsilh.com/svg/295067.svg" alt="logo" /> */}
         <ul className='navbar-list' >

    
    <li  ><Link to='/' className='li'>Home</Link></li>
    
    <li ><Link to='/Contact' className='li'>Find medicines</Link></li>
    <li ><Link to='/Login' className='li'>Login</Link></li>
    <li ><Link to='/Disease' className='li'>Predict Disease</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar
