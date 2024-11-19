import React, { useState } from 'react'
import data from '../assets/product.json'
import Product from './Product.jsx'
import './Menu.css'
const Menu = () => {
    const [products]=useState(data)
   
  return (
    <div className='products-container'>
    {products.map((product)=>
    <Product   key={product.id} 
    product={product}/>
    )}
      
    </div>
  )
}

export default Menu
