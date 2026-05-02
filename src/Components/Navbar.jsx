import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div style={{ width: "200px", height: "50px", display: "flex", alignItems: "center", boxSizing: "border-box" }}>
        <Logo />
        <div style={{ marginLeft: "10px" }}>
          <h2 style={{ marginLeft: "10px" }} className='title'>Bobsun</h2>
          <h3 className='title-mini'>Milk Tracker</h3>
        </div>

      </div>

      <div className='navlinks'>
        <NavLink
          to='/'
          className={`barLinks ${({ isActive }) => isActive ? 'active' : ''}`}
        >
          Home
        </NavLink>

        <NavLink
          to='/main'
          className={`barLinks ${({ isActive }) => isActive ? 'active' : ''}`}
        >
          Bundles
        </NavLink>

        <NavLink
          to='/about'
          className={`barLinks ${({ isActive }) => isActive ? 'active' : ''}`}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
}