import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';


export const Shop = () => {
  return (
    <div className='shop'>
        <h1 style={{ textAlign:'center'}}>ba<span style={{color:"goldenrod"}}>ZZ</span>ar</h1>
        
        <div className="products">
        {
            PRODUCTS.map(product=>(
                <Product data={product}/>
            ))
        }
        </div>
    </div>
  )
}
