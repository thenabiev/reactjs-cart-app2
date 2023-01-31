import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';


export default function CartItem(props) {
    const {id, productName, productImg, price}=props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount}=useContext(ShopContext)

  return (
    <div className='cart-item'>
        <div className="between align-c">
            <div className="imgBox">
                <img src={productImg} />
            </div>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>{price} AZN</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}> - </button>
                    <input onChange={(e)=>updateCartItemCount(Number(e.target.value), id)} value={cartItems[id]}/>
                    <button onClick={()=>addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    </div>
  )
}
