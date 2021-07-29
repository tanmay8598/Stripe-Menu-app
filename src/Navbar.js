import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const { showToggle, setShowToggle } = useState(false)
  return (
    <div
      className={`${
        showToggle ? 'show-submenu submenu-overlay' : 'submenu-overlay'
      }`}
    >
      <nav className='nav-container'>
        <nav className='nav-header'>
          <h1 className='nav-logo'>stripe</h1>
        </nav>
        <nav className='nav-toggel'>
          <button
            className='btn toggle-btn'
            onClick={() => {
              setShowToggle(!showToggle)
            }}
          >
            <FaBars />
          </button>
        </nav>
      </nav>
    </div>
  )
}

export default Navbar
