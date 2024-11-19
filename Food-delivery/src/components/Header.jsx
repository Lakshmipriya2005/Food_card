import React from 'react'
import {Link} from "react-router-dom"
import './header.css'
import cartt from '../assets/cartt.svg'
const Header = ({cart}) => {
  return (
    <div className='navbar'>
      <div className='logo'>
      Food Hub
      </div>
      
        <div className='ul'>

  <div className='h'>
        
        <Link to={"/"}>Home</Link>
        </div>
        <div className='first'>
            <Link to={"/Menu"}> Menu</Link>
            </div>
            <div className='sec'>
        
            <Link to={"/Viewcart"}><span>{cart.length}</span>Viewcart</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header
