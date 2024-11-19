import React from 'react'
import './product.css'
import { useContext } from 'react'
import { cartContext } from '../App'
const Product = ({product}) => {
  const name=product.name.length>21?product.name.substring(0,20)+"..":product.name
  const {cart,setCart}=useContext(cartContext)
  const addCart=()=>{
    setCart([...cart,product])
    

  }
  const removeCart=()=>{
    setCart(cart.filter((c)=> c.id !== product.id))
  
  }
  return (
    <div className='product'>
        <div className='img'>
            <img src={product.pic} alt={product.name} />
        </div>
        <div className='details'>
     <h3>{name}</h3>
     <p>Price Rs:{product.amt}</p>
     {
      cart.includes(product)?<button className='removebtn' onClick={removeCart}>Remove from cart</button>:
      <button onClick={addCart}>Add to cart</button>
     }
     </div>
    </div>
  )
}

export default Product
