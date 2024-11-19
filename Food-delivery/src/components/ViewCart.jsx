import React, { useEffect, useState,useContext } from 'react';
import './cart.css';
import { cartContext } from '../App'

const ViewCart = () => {
  const [total, setTotal] = useState(0);
  const {cart,setCart}=useContext(cartContext)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));

  }, [cart]);
  const removeCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };
  return (
    <div className="cart-container">
      <h1>Cart Products {cart.length}</h1>
      {cart.map((product) => (
        <div className="cart-product" key={product.id}>
          <div className="img">
            <img src={product.pic} alt="product" />
          </div>
          <div className="cart-pro-details">
            <h3>{product.name}</h3>
            <p>Price Rs: {product.amt}</p>
            <button onClick={()=>removeCart(product.id)}>Remove from cart</button>
          </div>
        </div>
      ))}
      <h1>Total Amount is: {total} Rs</h1>
    </div>
  );
};

export default ViewCart;
