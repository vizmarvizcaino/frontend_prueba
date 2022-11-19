import React from 'react'
import '../NavBar/navbar.css'
import { Link } from 'wouter'

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <Link href='/'><h2>VIZMAR V.</h2></Link>
        <Link href='/'><h3>INICIO</h3></Link>
      </div>
    </div>
  )
}

export default NavBar