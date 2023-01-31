import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar.js';
import { Cart } from './pages/cart/Cart';
import { Shop } from './pages/shop/Shop';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <ShopContextProvider>
      <div>
      <Router>
        <Navbar />
        <br />
          <section className="container pages">
          <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>

          </Routes>
          </section>
        </Router>
      </div>
    </ShopContextProvider>
  );
}

export default App;
