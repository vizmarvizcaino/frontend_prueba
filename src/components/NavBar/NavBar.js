import React from 'react'
import '../NavBar/navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to='/'><h2>VIZMAR V.</h2></Link>
        <Link to='/'><h3>INICIO</h3></Link>
      </div>
    </div>
  )
}

export default NavBar