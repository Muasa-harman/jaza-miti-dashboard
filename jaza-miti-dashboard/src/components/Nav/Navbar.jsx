import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='title'>
        <h1 className='lead'>Dashboard</h1>
        <div className='links'>
        <li className='navbarListItem active'>This Week</li>
        <li>This Month</li>
        <li>This Year</li>
        <li>Current Dates</li>
        </div>
        </div>
    </div>
  )
}

export default Navbar
