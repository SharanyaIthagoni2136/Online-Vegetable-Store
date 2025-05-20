import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Home from './Home';
import Signup from './Signup';
import Cart from './Cart';
import Data from './Data';
import Itemcart from './Itemcart';
import CheckoutForm from './CheckoutForm';
import OrderConfirmation from './OrderConfirmation';
function App() { 
  const [stage, setStage] = useState('cart');
 
  return (
    <CartProvider>
      <BrowserRouter>
      <header style={{ backgroundColor: 'yellow' }}>
          <marquee>Exciting News! 🎉 We're launching our brand-new website on 18th October! Stay tuned for exclusive offers, updates, and a whole new experience.</marquee>
        </header>
       <header style={{ backgroundColor: 'green' }}>
           
         <div className="header-center">
         <center> <h1 className="title">Organic Vegetables Store</h1></center>
         </div>
          <nav className='nav-links'> 
            <span><Link to='/Signup' style={{ color: 'white' }}>Signup</Link></span>
            <span><Link to='/Cart' style={{ color: 'white'}}>Cart</Link></span>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Signup' element={<Signup />} />
        
          <Route path="/cart" element={<Cart onBuyNow={() => setStage('checkout')} />} />

          <Route path='/Data' element={<Data />} />
          <Route path='/Itemcart' element={<Itemcart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path='/confirmation'element={<OrderConfirmation />}/>
        </Routes>
        <br/><br/> <br/><br/><br/> <br/><br/><br/><br/> <br/> <br/><br/><br/> <br/> <br/><br/><br/> <br/> <br/><br/><br/> <br/>
        <footer className='footer'>©natural</footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
