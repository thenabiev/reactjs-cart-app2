import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

export const Navbar = () => {
  return (
    <div className='navbar container'>
        <div className='logo'>
            <h1>ba<span style={{color:"goldenrod"}}>ZZ</span>ar</h1>
        </div>
        <div className="links">
            <Link className='shop-btn text-blck' to='/'>Shop</Link>
            <Link className='icon-btn text-blck' to='/cart'>
                <ShoppingCart size={28}/>
            </Link>
        </div>
    </div>
  )
}
