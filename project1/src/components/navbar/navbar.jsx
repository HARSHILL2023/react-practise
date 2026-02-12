import React from 'react'
import  './navbar.css'
import {fiheart} from 'react-icons'
import {AipoutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/fi'

const Navbar = () => {
  return (
    <>
    <nav>
      <header>
        <div className="nav-container">

        <input type="text" placeholder='Search for shoes'  className='search-input'/>

        </div>
        <div className="profileconatiner"></div>
      </header>
    </nav>
    
    </>
  )
}

export default Navbar
