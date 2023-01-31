import React, { useContext } from 'react';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../../context/shop-context';


export default function Product(props) {
    const {id, productName, productImg, price}=props.data;

    const {addToCart, cartItems}=useContext(ShopContext);

    const cartItemAmount=cartItems[id]
  return (
    <div key={id} className="item-card">
                    <div className="imgBox">
                        <img src={productImg} className="img" />
                        <div className="layer"></div>
                    </div>
                    <div className="itemDetails">
                        
                        <div className="between">
                            <div>
                                <h3>{productName}</h3>
                                <p>{price} AZN</p>
                            </div>
                            <button 
                            onClick={()=>addToCart(id)}
                            className='addToCartBtn'>
                                <ShoppingCart size={24}/> {cartItemAmount>0 && <>({cartItemAmount})</>}
                            </button>
                        </div>
                    </div>
                </div>
  )
}
