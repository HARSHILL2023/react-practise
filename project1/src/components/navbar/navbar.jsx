import React from 'react'
import './navbar.css'
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav>
      <header>
        <div className="nav-container">
          <input
            type="text"
            placeholder="Search for shoes"
            className="search-input"
          />
        </div>

        <div className="profilecontainer">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="#">
            <FiShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <FiUser className="nav-icons" />
          </a>
        </div>
      </header>
    </nav>
  )
}

export default Navbar
