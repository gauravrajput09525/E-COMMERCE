import React from 'react';
import Navbar  from './components/Navbar';
import Homepage  from './pages/Homepage';
import Cart from './pages/Cart/Cart';
import {Routes, Route} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';


const App = () => {
    return(
      <div>
       
        <Navbar/>
        
        <Routes>

          <Route path='/' element={<Homepage/>}/>
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
        <Footer />
      
      </div>
    );
};

export default App;