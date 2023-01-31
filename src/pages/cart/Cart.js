import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './CartItem';

export const Cart = () => {

  const {cartItems, getTotalCartAmount}=useContext(ShopContext);
  const totalAmount=getTotalCartAmount();

  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your cart items</h1>
      </div>
      <br />
      <br />
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount>0 ? 
      <div className="checkOut">
        <br />
        <p>Subtotal: {totalAmount} AZN</p>
        <br />
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      :
      <h3 style={{textAlign:'center'}}>Your cart is empty</h3>
      }
      <br /><br />
    </div>
  )
}
