import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context.js'
import sublinks from './data'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = () => {
    console.log('hover')
  }

  return (
    <nav className='nav'>
      <nav className='nav-container'>
        <nav className='nav-header'>
          <h1 className='nav-logo'>stripe</h1>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </nav>

        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </nav>
    </nav>
  )
}

export default Navbar
